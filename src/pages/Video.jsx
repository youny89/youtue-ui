import styled from 'styled-components'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Comments from "../components/Comments"
import Card from "../components/Card"
import { Link, useLocation } from 'react-router-dom';
import { useEffect} from 'react';
import timeago from '../utils/timeago';
import { useSelector, useDispatch } from "react-redux"
import {
  startFetch,
  successFetch,
  failFetch,
  like,
  disLike
} from "../redux/videoSlice"
import { subscribed, unSubscribed } from "../redux/userSlice"
import Avatar from '../components/Avatar';

const Container = styled.div`
  padding:20px;
  color:${({theme})=>theme.text};
  display: flex;
  justify-content: space-between;
  gap:20px;
`
const Content = styled.div`
  flex:7;
`
const Recommendation = styled.div`
  flex:3;
`
const VideoWrapper = styled.div``
const Title = styled.div`
  margin:20px 0;
  font-weight:500;
  font-size:20px;
`
const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:20px;
`

const Creator = styled.div`
  display: flex;
  align-items: center;
  gap:20px;
  div{
    display: flex;
    flex-direction: column;
    gap:4px;
  }
  a{
    color:${({theme})=>theme.text}
  }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap:18px;

  button{
    padding:4px 10px;
    gap:10px;
    border:none;
    outline:none;
    cursor: pointer;
    background:${({theme})=>theme.secondary};
    display: flex;
    align-items: center;
    color:${({theme})=> theme.text};
    &:hover{
      opacity:0.8;
    }

  }
  svg{
    color:${({theme})=> theme.text};
    font-size:18px;
  }

`
const LikesButtons = styled.div`
  display: flex;
  color : ${({liked}) => liked ?'green':''};

  button{
    &:first-child {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
      position: relative;

      &::after {
        position: absolute;
        right:0;
        content:"";
        border-right:solid 1px gray;
        height:10px;
      }
    }
    &:last-child {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      
    }
  }
`

const Info = styled.div`
  background-color: ${({theme})=>theme.secondary};
  padding:20px;
  border-radius: 10px;;
  line-height: 24px;

  button{
    border:solid 1px ${({theme})=>theme.primary};
    color:${({theme})=>theme.primary};
    outline:none;
    background-color: transparent;
    padding:4px 10px;
    border-radius: 12px;
    cursor: pointer;

    margin-top:10px;
    &:hover{
      opacity: 0.8;
    }
  }
`
const SubscribeButton = styled.button`
    padding:6px 16px;
    font-size:15px;
    font-weight: 500;
    border:none;
    outline:none;
    cursor: pointer;
    background:${({theme})=>theme.darkerBg};
    color:${({theme})=> theme.text};
    border-radius: 20px;
    &:hover{
      opacity:0.8;
    }
  
`
const Video = () => {
  const location = useLocation();
  const videoId = location.pathname.split('video/')[1];
  const { loadedVideo } = useSelector(state=>state.video);
  const { currentUser } = useSelector(state=>state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    
    const loadData = async () => {
      dispatch(startFetch())

      try {
        const response = await fetch(`/video/${videoId}`);
        if(response.ok) {
          const video = await response.json();
          dispatch(successFetch(video));
        } else{
          dispatch(failFetch())
        }
      } catch (error) {
        dispatch(failFetch())
      } 

    }

    loadData();
  },[videoId, dispatch])


  const handleLike = async () => {
    if(!currentUser) return;

    await fetch(`/video/${videoId}/like`,{ method:'put' });
    dispatch(like(currentUser._id))
  }

  const handleDisLike = async () => {
    if(!currentUser) return;

      await fetch(`/video/${videoId}/dislike`,{ method:'put' });
      dispatch(disLike(currentUser._id))
  }

  const handleSubscribe = async (subId) => {
    const response = await fetch(`/user/subscribe/${subId}`, { method: 'put' })
    console.log(response);
    if(!response.ok) return;
    dispatch(subscribed(subId))

  }
  const handleUnSubscribe = async (subId) => {
    const response = await fetch(`/user/unsubscribe/${subId}`, { method: 'put' })
    console.log(response);
    if(!response.ok) return;
    dispatch(unSubscribed(subId));
  }

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/S4Ts9IXnXoQ"
            title="[4K] 220515 정은지 - &#39;소녀의 소년&#39; 직캠 in Beautiful Mint Life 2022"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </VideoWrapper>
        <Title>{loadedVideo?.title}</Title>
        <Detail>
          <Creator>
              <Avatar url={loadedVideo?.creator?.avatar}/>
            <div>
              <Link to={`/user/${loadedVideo.creatorId}`}><span>{loadedVideo?.creator?.name}</span> </Link>
              <small>구독자: {loadedVideo?.creator?.numberOfSubscribers}명</small>
            </div>
             {currentUser && currentUser.subscribedUsers.includes(loadedVideo.creatorId) && <SubscribeButton onClick={()=>handleUnSubscribe(loadedVideo.creatorId)}>구독 중</SubscribeButton>}
              {currentUser && !currentUser.subscribedUsers.includes(loadedVideo.creatorId) && currentUser._id !== loadedVideo.creatorId && <SubscribeButton onClick={()=>handleSubscribe(loadedVideo.creatorId)}>구독</SubscribeButton>}
          </Creator>
          <Buttons>
            <LikesButtons>
              <button onClick={handleLike}>
                <ThumbUpOffAltIcon/>
                {loadedVideo?.likes?.length}
              </button>
              <button onClick={handleDisLike}>
                <ThumbDownOffAltIcon/>
                {loadedVideo?.disLikes?.length}
                </button>
            </LikesButtons>
            <button style={{borderRadius:"12px"}}>
              <ShareIcon/>
              공유
            </button>
            <button style={{borderRadius:'50%', padding:"5px"}}>
              <MoreHorizIcon/>
            </button>
          </Buttons>
        </Detail>
        <Info>
          <p>조회수 {loadedVideo?.views}회  {timeago(loadedVideo?.createdAt)}  #뷰민라</p>          
          <p>{loadedVideo?.description}</p>
          <button>더보기</button>
        </Info>
        {/* Comments */}
        <Comments videoId={videoId}/>
      </Content>


      <Recommendation>
        {
          [1,2,3,4,5,6,7].map(i=><Card key={i} type="sm"/>)
        }
      </Recommendation>
    </Container>
  )
}

export default Video
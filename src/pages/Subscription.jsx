import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { useSelector } from "react-redux"
import Card from '../components/Card'
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";


const Container = styled.div`
  padding: 0 20px;
  header {
    display: flex;
    justify-content: space-between;
    color:${({theme}) => theme.text};

    a{
      padding:8px 16px;
      background-color: ${({theme})=>theme.darkerBg};
      border-radius: 10px;;
      color:${({theme}) => theme.text}
    }
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:20px;
`
const NotLoggedContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:${({theme})=>theme.lightText};
  gap:20px;
  margin-top:80px;
  svg{
    font-size:100px;
  }
  h3{}
  p{}
  a{
    display: flex;
    align-items: center;
    gap:10px;
    color:${({theme})=>theme.primary};
    border:solid 1px ${({theme})=>theme.primary};
    padding:4px 16px;
    border-radius: 7px;;
    &:hover{ opacity:0.8;}
    svg{
      font-size:28px;
    }
  }
`

const Subscription = () => {
  const { currentUser } = useSelector(state=>state.user);
  const [ videos, setVideos] = useState([]);

  useEffect(()=>{
    if(!currentUser) return;
    const loadData = async () => {
      const response = await fetch(`/video/subscribed`);
      console.log(response)
      if(!response.ok) return;
      const data = await response.json();
      setVideos(data);
    }

    loadData();
  },[currentUser])


  
  return (
    <Container>
      {currentUser ? (
        <>
          <header>
            <span>최신순</span>
            <Link to="/subscription/settings">관리</Link>
          </header>
          <Wrapper>
            {videos && videos.length === 0 && <p>비디오가 없습니다.</p>}
            {videos?.map(video=><Card key={video._id} video={video} />)}
          </Wrapper>
        </>
      ) : (
        <NotLoggedContent>
           <VideoLibraryOutlinedIcon />
          <h3>새로운 동영상을 놓치지 마세요.</h3>
          <p>즐겨찾는 YouTube 채널의 업데이트를 확인하려면 로그인하세요.</p>
          <Link to="/login">
            <AccountCircleOutlinedIcon/>
            로그인
          </Link>
        </NotLoggedContent>
      )}
    </Container>
  )
}

export default Subscription
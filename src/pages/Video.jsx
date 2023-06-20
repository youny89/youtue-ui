import styled from 'styled-components'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Comments from "../components/Comments"
import Card from "../components/Card"

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
const Avatar = styled.span`
  width:40px;
  height:40px;
  border-radius: 50%;
  background-color: springgreen;
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
    background:${({theme})=>theme.secondary};
    color:${({theme})=> theme.text};
    border-radius: 20px;
    &:hover{
      opacity:0.8;
    }
  
`
const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/S4Ts9IXnXoQ"
            title="[4K] 220515 정은지 - &#39;소녀의 소년&#39; 직캠 in Beautiful Mint Life 2022"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </VideoWrapper>
        <Title>[4K] 220515 정은지 - '소녀의 소년' 직캠 in Beautiful Mint Life 2022</Title>
        <Detail>
          <Creator>
            <Avatar />
            <div>
              <span>채널이름</span>
              <small>구독자: 2.58천명</small>
            </div>
            <SubscribeButton>구독</SubscribeButton>
          </Creator>
          <Buttons>
            <LikesButtons>
              <button>
                <ThumbUpOffAltIcon />
                1,200
              </button>
              <button><ThumbDownOffAltIcon/></button>
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
          <p>조회수 9.8천회  1년 전  #뷰민라</p>          
          <p>'소녀의 소년' in Beautiful Mint Life 2022</p>
          <button>더보기</button>
        </Info>
        {/* Comments */}
        <Comments />
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
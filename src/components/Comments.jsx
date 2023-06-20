import styled from 'styled-components'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import CommentAdd from "./CommentAdd"

const Conatiner = styled.div`
    margin-top:20px;
`
const CommentHeader = styled.div`
     display :flex ;
     align-items: center;
     gap:40px;
     h3{
        font-size:18px;
        font-weight:400;
     }
     button{
        cursor: pointer;
        display :flex ;
        align-items: center;
        gap:20px;
        background-color: transparent;
        outline:none;
        border:none;
        color:${({theme})=>theme.text};

        &:hover{
            opacity: 0.8;
        }
     }
`

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
  margin-top:20px;
`

const CommentItem = styled.div`
  background-color: transparent;
  font-size:18px;
  display: flex;
  justify-content: space-between;
  gap:24px;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
  flex:1;
  div:first-child{
    display: flex;
    align-items: center;
    gap:10px;
    color:${({theme})=>theme.lightText};
    span{
      font-size:16px;
      font-weight: 600;
    }
    small {
      font-size:12px;
    }

  }
  div:last-child{
    display: flex;
    gap:16px;
  }
  p{
    font-size:15px;
  }
  button{
    margin-right:10px;
    outline:none;
    border:none;
    background: transparent;
    color:${({theme})=>theme.lightText};
    display: flex;
    align-items: center;
    gap:6px;
    cursor: pointer;
    &:hover{
      opacity:0.8;
    }
    svg{
      font-size:18px;
    }
  }
`
const UserAvatar = styled.span`
    height:30px;
    width:30px;
    background-color: teal;
    border-radius: 50%;

` 


// Need video id
const Comments = () => {
  return  (
    <Conatiner>
      <CommentHeader>
          <h3>댓글 10,400</h3>
          <button><SortOutlinedIcon/> 정렬 기준 </button>
      </CommentHeader>

      <CommentAdd />

      <CommentList>
        <CommentItem>
            <UserAvatar />
            <Info>
              <div>
                <span>@user-sw6jn6tz1k</span>
                <small>1일 전</small>
              </div>
              <p>
                다 커버린 원숭이가 부루는 노래
              </p>
              <div>
                <button><ThumbUpOffAltIcon/> 120</button>
                <button><ThumbDownOffAltIcon/>17</button>
              </div>
            </Info>
          </CommentItem>
        <CommentItem>
            <UserAvatar />
            <Info>
              <div>
                <small>@user-sw6jn6tz1k</small>
                <small>1일 전</small>
              </div>
              <p>
                다 커버린 원숭이가 부루는 노래
              </p>
              <div>
                <button><ThumbUpOffAltIcon/></button>
                <button><ThumbDownOffAltIcon/></button>
              </div>
            </Info>
          </CommentItem>
        <CommentItem>
            <UserAvatar />
            <Info>
              <div>
                <small>@user-sw6jn6tz1k</small>
                <small>1일 전</small>
              </div>
              <p>
                다 커버린 원숭이가 부루는 노래
              </p>
              <div>
                <button><ThumbUpOffAltIcon/></button>
                <button><ThumbDownOffAltIcon/></button>
              </div>
            </Info>
          </CommentItem>
        <CommentItem>
            <UserAvatar />
            <Info>
              <div>
                <small>@user-sw6jn6tz1k</small>
                <small>1일 전</small>
              </div>
              <p>
                다 커버린 원숭이가 부루는 노래
              </p>
              <div>
                <button><ThumbUpOffAltIcon/></button>
                <button><ThumbDownOffAltIcon/></button>
              </div>
            </Info>
          </CommentItem>
      </CommentList>
      
    </Conatiner>
    )
}

export default Comments
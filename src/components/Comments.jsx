import styled from 'styled-components'
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import CommentAdd from "./CommentAdd"
import { useEffect, useState } from 'react';
import Comment from './Comment';

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
  margin-top:20px;
`

// Need video id
const Comments = ({videoId}) => {

  // const [comments, setComments] = useState([]);
  const [comments, setComments] = useState([]);
  const [totalNumber, setTotalNumber] = useState(0);

  useEffect(() => {
    const loadComments = async () => {
      const response = await fetch(`/comment/${videoId}`)
      if(!response.ok) {
        return
      }
      const {comments,totalNumber} = await response.json();
      setComments(comments)
      setTotalNumber(totalNumber)
    };

    loadComments();
  },[])

  const pushNewCommentHandler = (newComment) => {
    console.log('pushNewCommentHandler : ',newComment);
    setComments(prev=>[newComment, ...prev]);
    setTotalNumber(prev=>prev+1);
  }

  return  (
    <Conatiner>
      <CommentHeader>
          <h3>댓글 {totalNumber}</h3>
          <button><SortOutlinedIcon/> 정렬 기준 </button>
      </CommentHeader>

      <CommentAdd videoId={videoId} pushNewComment={pushNewCommentHandler}/>

      <CommentList>
        {comments && comments?.length === 0 && <p> 댓글이 없어요.</p>}
        {comments && comments?.map(comment=><Comment key={comment._id} comment={comment}/>)}
      </CommentList>
      
    </Conatiner>
    )
}

export default Comments
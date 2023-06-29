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

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState()
  const [totalNumber, setTotalNumber] = useState(0);

  useEffect(() => {
    const loadComments = async () => {
      setLoading(true)
      const response = await fetch(`/comment/${videoId}`)
      if(!response.ok) {
        return
      }
      
      const {comments,totalNumber} = await response.json();

      setLoading(false);
      setComments(comments)
      setTotalNumber(totalNumber)
    };

    loadComments();
  },[videoId])

  const pushNewCommentHandler = (newComment) => {
    setComments(prev=>[newComment, ...prev]);
    setTotalNumber(prev=>prev+1);
  }
  const pullDeletedCommentHandler = (id) => {
    setComments(prev=>prev.filter(c=>c._id !== id));
    setTotalNumber(prev=>prev-1);
  }

  console.log('렌더링 댓글 컴포넌트')

  return  (
    <Conatiner>
      <CommentHeader>
          <h3>댓글 {totalNumber}</h3>
          <button><SortOutlinedIcon/> 정렬 기준 </button>
      </CommentHeader>

      <CommentAdd videoId={videoId} pushNewComment={pushNewCommentHandler}/>

      <CommentList>
        {loading && <p>로딩중...</p>}
        {!loading && comments && comments?.length === 0 && <p> 댓글이 없어요.</p>}
        {comments && comments?.map(comment=><Comment key={comment._id} comment={comment} pullDeletedComment={pullDeletedCommentHandler}/>)}
      </CommentList>
      
    </Conatiner>
    )
}

export default Comments
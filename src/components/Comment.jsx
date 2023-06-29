import styled from 'styled-components'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Avatar from './Avatar';
import timeago from '../utils/timeago';
import { useState } from 'react';
import { useSelector } from "react-redux"

const Container = styled.div`
    display: flex;
    gap:20px;
    margin-top:20px;
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
      font-size:14px;
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
    &:disabled {
      cursor: not-allowed;
    }
    &:hover{
      opacity:0.8;
    }
    svg{
      font-size:18px;
    }
  }
`
const DeleteButton = styled.button`
    outline:none;
    border:none;
    background: transparent;
    color:${({theme})=>theme.lightText};
    gap:6px;
    align-items: center;
    position: relative;
    width:60px;
    span {
      font-size:12px;
      transform: translateX(-50%);
      position: absolute;
      right:10px;
      padding:6px 6px;
      color:${({theme})=>theme.text};
      background-color:${({theme})=>theme.darkerBg};
      opacity: 0;
      transition: all ease-in-out .5s;
      width:inherit;
      border-radius: 20px;
    }

    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
    &:hover{
      opacity:0.8;
      span {
        opacity:0.8;
      }
    }
    svg{
      font-size:18px;
      color:tomato;
    }
`

const Comment = ({comment, pullDeletedComment}) => {
  const { currentUser } = useSelector(state=>state.user);
  const [ data, setData ] = useState(comment || {});
  const [ submitting, setSubmitting] = useState(false);

  const handleLike =async () => {
    if(!currentUser) return;

    setSubmitting(true)
    const response = await fetch(`/comment/${comment._id}/like`,{ method: "put"});  
    if(!response.ok) return;
    setData(prev=>{
      return {
        ...prev,
        likes : 
          prev.likes.includes(currentUser._id) ?
            prev.likes.filter(id=>id !== currentUser._id) :
            [...prev.likes, currentUser._id]
      }
    });
    setSubmitting(false)

  }

  const handleDislike =async () => {
    if(!currentUser) return;

    setSubmitting(true)
    const response = await fetch(`/comment/${comment._id}/dislike`,{ method: "put"});  
    if(!response.ok) return;

    setSubmitting(false)
    
    setData(prev=>{
      return {
        ...prev,
        disLikes : 
          prev.disLikes.includes(currentUser._id) ?
            prev.disLikes.filter(id=>id !== currentUser._id) :
            [...prev.disLikes, currentUser._id]
      }
    })
  }
  const handleDelete = async () => {
    if(!currentUser) return;
    setSubmitting(true)
    const response = await fetch(`/comment/${data._id}`,{ method: 'delete'});
    if(!response.ok){
      console.log('댓글을 삭제 할수 없습니다.')
      setSubmitting(false);
      return;
    }
    pullDeletedComment(data._id)
    setSubmitting(false);
  }
  return (
    <Container>
      <Avatar url={data.userId?.avatar}/>
      <Info>
        <div>
          <span>{data.userId?.name || data.userId?.email}</span>
          <small>{timeago(comment.createdAt)}</small>
        </div>
        <p>{data.text}</p>
        <div>
          <button disabled={submitting } onClick={handleLike}><ThumbUpOffAltIcon/> {data.likes?.length}</button>
          <button disabled={submitting } onClick={handleDislike}><ThumbDownOffAltIcon/>{data.disLikes?.length}</button>
        </div>
      </Info>
      {currentUser && currentUser?._id.toString() === data?.userId?._id?.toString() && 
        <DeleteButton onClick={handleDelete} disabled={submitting}>
          <span>삭제</span>
          <DeleteOutlineIcon />
        </DeleteButton>
      }
    </Container>
  )
}

export default Comment
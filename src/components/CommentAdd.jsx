import styled from 'styled-components'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { useState } from 'react';
import { useSelector } from "react-redux"
import Avatar from './Avatar';

const Container = styled.div`
  margin-top:20px;
  
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:20px;
`

const CommentForm = styled.form`
  flex:1;
  
  input {
    border:none;
    outline:none;
    background-color: transparent;
    color:${({theme})=>theme.text};
    width:100%;
    padding-bottom:8px;
    font-size:12px;
  }
`
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:10px;

  button{
    outline:none;
    border:none;
    cursor: pointer;
    color:${({theme})=>theme.text};
    font-size:14px;

    &:hover{
      opacity: 0.8;;
    }
  }
`
const CancelBtn = styled.button`
  background-color: transparent;
`
const SubmitBtn = styled.button`
  background-color: ${({theme})=>theme.secondary};
  padding:6px 14px;
  border-radius: 16px;;
  margin-left:10px;
`
const IcoinBtn = styled.button`
  background-color: transparent;
  font-size:18px;
`


const CommentAdd = ({videoId, pushNewComment}) => {
  const [ isActive, setIsActive ] = useState(false); 
  const [ text, setText ] = useState('');
  const { currentUser } = useSelector(state=>state.user)

  const handleCancel = () => {
    setText('')
    setIsActive(false);  
  }
  const handleSubmit = async e => {
    e.preventDefault();
    if(text.trim()==='') return;
    const response = await fetch(`/comment/${videoId}`,{
      headers: { "Content-Type":"application/json" },
      method:"POST",
      body: JSON.stringify({text})
    });

    if(!response.ok) {
      console.log(response)
      return
    }

    const newComment = await response.json();
    const userId = {
      name : currentUser.name || currentUser.email,
      avatar : currentUser.avatar
    }

    pushNewComment({...newComment, userId});
    handleCancel(); 
  }
  return (
    <Container>
      <Wrapper>
          <Avatar url={currentUser?.avatar}/>
          <CommentForm>
            <input placeholder='댓글 추가' onChange={e=>setText(e.target.value)} value={text} onFocus={()=>setIsActive(true)} />
            {isActive && <Actions>
              <IcoinBtn>
                <SentimentSatisfiedAltIcon />
              </IcoinBtn>
              <div>
                <CancelBtn onClick={handleCancel}>취소</CancelBtn>
                <SubmitBtn onClick={handleSubmit}>댓글</SubmitBtn>
              </div>
            </Actions>}
          </CommentForm>
      </Wrapper>
    </Container>
  )
}

export default CommentAdd
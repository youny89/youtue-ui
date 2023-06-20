import styled from 'styled-components'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { useState } from 'react';

const Container = styled.div`
  margin-top:20px;
  
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:20px;
`
const Avatar = styled.span`
  height:40px;
  width:40px;
  background-color: lightslategray;
  border-radius: 50%;
`

const CommentForm = styled.form`
  flex:1;
  
  input {
    border:none;
    outline:none;
    border-bottom:solid  ${({active})=> active ? '3px' : '1px'} ${({theme})=>theme.secondary};
    background-color: transparent;
    color:${({theme})=>theme.text};
    width:100%;
    padding-bottom:8px;
    font-size:12px;
  }
`
const Actions = styled.div`
  display: ${({active})=> active ? 'flex' : 'none'};
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


const CommentAdd = () => {
  const [ isActive, setIsActive ] = useState(false); 

  return (
    <Container>
      <Wrapper>
          <Avatar />
          <CommentForm active={isActive}>
            <input placeholder='댓글 추가' onFocus={()=>setIsActive(true)} onBlur={()=>setIsActive(false)}/>
            <Actions active={isActive}>
              <IcoinBtn>
                <SentimentSatisfiedAltIcon />
              </IcoinBtn>
              <div>
                <CancelBtn>취소</CancelBtn>
                <SubmitBtn>댓글</SubmitBtn>
              </div>
            </Actions>
          </CommentForm>
      </Wrapper>
    </Container>
  )
}

export default CommentAdd
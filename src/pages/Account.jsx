import styled from "styled-components"

import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector, useDispatch} from "react-redux"
import { updateCurrentUser } from "../redux/userSlice";
import toast from "react-hot-toast"
import LoadingButton from "../components/LoadingButton";

const Container = styled.div`
  margin:20px;
`
const Wrapper = styled.div``

const Title = styled.div`
  color:${({theme})=>theme.lightText};
  font-size:22px;
  margin: 20px 0;
`

const Section = styled.div`
  background-color: ${({theme})=>theme.darkerBg};
  padding:40px;
  margin-bottom:50px;
  border-radius: 10px;

  input,textarea {
    background-color: ${({theme})=>theme.bg};;
    color:${({theme})=>theme.lightText};
    font-size:16px;
    outline:none;
    border:none;
    border:solid 1px ${({theme})=>theme.bg};
    padding:10px;
    border-radius: 6px;
    width:70%;
  }
  button{
    padding:10px;
    font-size:16px;
    background-color:transparent;
    /* background-color:${({theme})=>theme.bg}; */

    border-radius: 6px;
    outline:none;
    border:none;
    color:${({theme})=>theme.text};;
    border:solid 1px ${({theme})=>theme.bg};
    cursor: pointer;

  }
`

const InputGroup = styled.div`
  color:${({theme})=>theme.lightText};
  display: flex;
  margin-bottom:20px;
  label{
    font-size:16px;
    flex:1
  }
  input,textarea{
    flex:7;
  }
`

const PictureContainer = styled.div`
  display: flex;
  margin-bottom:40px;
  gap:40px;
  height:100%;
`


const Left = styled.div`
  width:280px;
  height:160px;
  background-color: ${({theme})=>theme.bg};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Right = styled.div`
  color:${({theme})=>theme.lightText};
  display: flex;
  flex-direction: column;
  gap:20px;
  min-height:100%;
  h3{
  }
  span{
    font-size:14px;
  }
`

const ButtonGroup = styled.div`
  button{
    color:${({theme})=>theme.primary};
    background-color: transparent;
    border:none;
    outline:none;
    padding:10px;
    font-size:16px;
    cursor: pointer;
    &:hover{
      background-color:${({theme})=>theme.secondary};
      opacity: 0.8;
    }
  }  
`
const AvatarImg = styled.img`
    border-radius: 100%;
    width:120px;
    height:120px;
    background-color: purple;
`
const BannerImg = styled.img`
    border-radius: 10px;
    background-color: purple;
    width:200px;
    height:120px;
`

const Account = () => {
  const { currentUser } = useSelector(state=>state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [submitting, setSubmitting] = useState(false);
  const [ name, setName ] = useState(currentUser.name || '');
  const [ email, setEmail ] = useState(currentUser.email || '');
  const [ description, setDescription ] = useState(currentUser.description || '');

  useEffect(()=>{
   if(!currentUser) return navigate('/'); 
  })

  const handleBasicInfoSubmit = async e => {
    e.preventDefault();
    if(!name && !description) return;
    setSubmitting(true)
    const response = await fetch(`/user/`,{
      method:"put",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({name,description,email})
    });

    if(response.ok) {
      const updatedUser = await response.json();
      dispatch(updateCurrentUser(updatedUser));
      toast.success('업데이트 성공')
    }
    setSubmitting(false)
    
    console.log(response);
  }

  return (
    <Container>
      <Wrapper>
        <Title>기본 정보</Title>
        <Section>
          <InputGroup>
            <label>이름</label>
            <input placeholder="이름을 입력해주세요" value={name} onChange={e=>setName(e.target.value)}/>
          </InputGroup>
          <InputGroup>
            <label>이메일</label>
            <input placeholder="이메일" value={email} onChange={e=>setEmail(e.target.value)}/>
          </InputGroup>
          <InputGroup>
            <label>설명</label>
            <textarea placeholder="설명" value={description} onChange={e=>setDescription(e.target.value)}></textarea>
          </InputGroup>
          <button onClick={handleBasicInfoSubmit} disabled={submitting}>
            {submitting ? <LoadingButton /> : '업데이트'}
          </button>
        </Section>

        <Title>사진</Title>
        <Section>
          <PictureContainer>
              <Left>
                <AvatarImg />
              </Left>
              <Right>
                <h3>프로필 사진</h3>
                <span>프로필 사진은 동영상 및 댓글등에 표시됩니다. </span>
                <ButtonGroup>
                  <button>변경</button>
                  <button>삭제</button>
                </ButtonGroup>
              </Right>
          </PictureContainer>
          <PictureContainer>
              <Left>
                <BannerImg />
              </Left>
              <Right>
                <h3>배너 사진</h3>
                <span>이 이미지가 채널 상단에 표시됩니다. </span>
                <ButtonGroup>
                  <button>변경</button>
                  <button>삭제</button>
                </ButtonGroup>
              </Right>
          </PictureContainer>
        </Section>

        <Title>이메일 변경</Title>
        <Section>
          <input placeholder="이메일 변경"/>
          <button>변경</button>
        </Section>

        <Title>비밀번호 변경</Title>
        <Section>
          <input placeholder="비밀번호 변경"/>
          <button>변경</button>
        </Section>

        <Title>계정 삭제</Title>
        <Section>
          <button>삭제하기</button>
        </Section>

      </Wrapper>
    </Container>
  )
}

export default Account
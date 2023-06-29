import { useEffect, useState } from "react";
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux";
import { subscribed, unSubscribed } from "../redux/userSlice";

const Container = styled.div`
  margin-top:40px;
  padding:0 20px;
`

const Avatar = styled.img`
  width:140px;
  height:140px;
  border-radius: 100%;
  object-fit: cover;
  background-color: slategrey;;
`;
const NoAvatar = styled.img`
  width:140px;
  height:140px;
  border-radius: 100%;
  object-fit: cover;
`;
const SubItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:100px;
  margin-bottom: 40px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
  color: ${({theme})=>theme.text};
  h3{
    display: flex;
    justify-content: space-between;
    span{
      color: ${({theme})=>theme.text};
      background-color: ${({theme})=>theme.primary};
      padding:8px;
      border-radius: 10px;
      font-size:13px;
    }
  }
  span,p{
    color:${({theme})=>theme.lightText};
    font-size:14px;
  }
`;
const Alert = styled.div`
  padding:20px;
  background-color: ${({theme})=>theme.darkerBg};
  border-radius: 16px;;
  cursor: pointer;
  color: ${({theme})=>theme.lightText};
  &:hover{
    opacity: 0.8;;
  }
`;


const SubSetting = () => {

  const [subscribers, setSubscribers] = useState([]);
  const { currentUser } = useSelector(state=>state.user);

  const dispatch = useDispatch()
  useEffect(()=>{
      if(!currentUser?._id) return;
      const loadData = async () => {
        const response = await fetch(`/subscribe/users`);
        console.log(response)
        if(!response.ok) return;
        const data = await response.json();
        setSubscribers(data);
      }
  
      loadData();
    },[currentUser._id])


    const handleUnSubscribe = async (subId) => {
      const response = await fetch(`/user/unsubscribe/${subId}`, { method: 'put' })
      console.log(response);
      if(!response.ok) return;
      dispatch(unSubscribed(subId));

    }
    const handlesubscribe = async (subId) => {
      const response = await fetch(`/user/subscribe/${subId}`, { method: 'put' })
      console.log(response);
      if(!response.ok) return;
      dispatch(subscribed(subId));

    }
    

    return (
        <Container>
          {subscribers?.map(sub=><SubItem key={sub._id}>
             <Avatar src={sub.avatar}/>
            <Info>
              <h3>{sub.name} <span>{currentUser.subscribedUsers.includes(sub._id) ? '구독 중' : '구독 취소'}</span></h3>
              <div>
                <span>구독자: {sub.numberOfSubscribers}명</span> | <span>동영상: {sub.numberOfVideos}개</span>
              </div>
              <p>₊‧𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 초여름 특유의 선선한 밤공기를 느끼며 ｡+ﾟ*</p>
            </Info>
            
            {
              currentUser.subscribedUsers.includes(sub._id) ? 
              (<Alert onClick={() => handleUnSubscribe(sub._id)}>구독 취소 하기</Alert>) :
              (<Alert onClick={() => handlesubscribe(sub._id)}>다시 구독 하기</Alert>)
            }
          </SubItem>)}
        </Container>
    )
}

export default SubSetting
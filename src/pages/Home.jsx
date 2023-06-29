import styled from "styled-components"
import Card from '../components/Card'
import { useEffect, useState } from "react";
import Tags from "../components/Tags";

const Container = styled.div`
`;
const Wrapper = styled.div`
margin-top: 20px;;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap:14px;
`;


const Home = ({type}) => {
  const [videos, setVideos] = useState([]);
  useEffect(()=>{
    const fetchData = async() => {
      const response = await (await fetch(`video/find/${type}`)).json();
      setVideos(response)
    }
    fetchData();
  },[type])
  console.log(videos);
  return (
    <Container>
      <Tags />
      <Wrapper>
        {videos?.map(video=><Card key={video?._id} video={video}/>)}
      </Wrapper>
    </Container>
  )
}

export default Home
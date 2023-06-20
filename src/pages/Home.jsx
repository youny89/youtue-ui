import styled from "styled-components"
import Card from '../components/Card'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap:14px;
`;

const Home = () => {
  
  return (
    <Container>
        {[1,2,3,4,5,6,7,8,9,10,11,12].map(i=><Card key={i}/>)}
    </Container>
  )
}

export default Home
import styled, { keyframes } from 'styled-components'

const BounceAnimation = keyframes`
  0% { 
    margin-bottom: 0; 
  }

  50% { 
    margin-bottom: .5rem;
  }

  100% { 
    margin-bottom: 0;
  }
`
const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  h3{
    font-size:14px;
  }
`
const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width:8px;
  height: 8px;
  margin: 0 5px;
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${({delay}) => delay};
  background-color:${({theme}) => theme.text};
`


const LoadingButton = () => {
    return (
        <Container>
            <h3>기다려 주세요</h3>
            <Dot delay="0s"/>
            <Dot delay="0.1s"/>
            <Dot delay="0.2s"/>
        </Container>

    )
}

export default LoadingButton
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    display: ${({type})=> type=== 'sm' && 'flex'};
    width:${({type}) => type !== 'sm' && '300px' };
    height:${({type}) => type === 'sm' ? '100px':'200px' };
    margin-bottom:${({type}) => type === 'sm' ? '30px':'100px' };
    gap:10px;
`

const ImageContainer = styled.div`
    height:100%;
    background-color: lightslategray;
    margin-bottom:20px;
    flex:1;
`
const Img = styled.div`
    width:100%;
    height:100%;
    background-color: lightslategray;
    margin-bottom:20px;
`
const Info = styled.div`
    display: flex;
    flex:1;
    gap:10px;
    
    div{
        flex:1;
    }
    h3{
        color:${({theme})=>theme.text};;
        font-size:${({type})=>type==='sm'?'14px':'16px'};;
        font-weight: 400;
        margin-bottom: 3px;
    }
    p{
        font-size:${({type})=>type==='sm'?'12px':'14px'};;
        color:gray;
    }
`
const Avatar = styled.span`
    height:30px;
    width:30px;
    background-color: lightgray;
    border-radius: 100%;;
    display: ${({type})=>type==='sm' && 'none'};
`

const Card = ({type}) => {
  return (
    <Link to="/video/test">
        <Container type={type}>
            <ImageContainer>
                <Img />
            </ImageContainer>
            <Info type={type}>
                <Avatar type={type}/>
                <div>
                    <h3>{"미국-멕시코 라이벌 경기에서 나온 대난투극...참다못한 심판의 이례적인 조기종료까지? / 스포츠머그".slice(0,36)} ...</h3>
                    <p>스포츠 머그</p>
                    <p>조회수 22만회 | 3시간 전</p>
                </div>
            </Info>
        </Container>
    </Link>
  )
}

export default Card
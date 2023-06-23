import { Link } from 'react-router-dom'
import styled from 'styled-components'
import timeago from '../utils/timeago'
import Avatar from './Avatar'

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
        color:${({theme}) => theme.lightText};
        margin-top:3px;
    }
`
const Card = ({type,video}) => {
  return (
    <Link to={`/video/${video._id}`}>
        <Container type={type}>
            <ImageContainer>
                <Img />
            </ImageContainer>
            <Info type={type}>
                { <Avatar type={type} url={video.creator?.avatar}/>}
                <div>
                    <h3>{video.title.slice(0,36)} ...</h3>
                    <p>{video.creator?.name}</p>
                    <p>조회수 {video.views}회 | {timeago(video.createdAt)}</p>
                </div>
            </Info>
        </Container>
    </Link>
  )
}

export default Card
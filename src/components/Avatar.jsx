import styled from 'styled-components'

const StyledAvatar = styled.img`
    height:30px;
    width:30px;
    background-color: lightgray;
    border-radius: 100%;;
    display: ${({type})=>type==='sm' && 'none'};
    object-fit: cover;
` 
const DefaultAvatar = styled.span`
    height:30px;
    width:30px;
    background-color: lightgray;
    border-radius: 100%;;
    display: ${({type})=>type==='sm' && 'none'};
    object-fit: cover;
` 

const Avatar = ({type, url}) => {
  return url ? <StyledAvatar type={type} src={url}/> : <DefaultAvatar type={type}/>
}

export default Avatar
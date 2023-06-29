import styled from 'styled-components'

const StyledAvatar = styled.img`
    height:30px;
    width:30px;
    background-color: lightgray;
    border-radius: 100%;;
    display: ${({type})=>type==='sm' && 'none'};
    object-fit: cover;
    cursor: pointer;
` 
const DefaultAvatar = styled.span`
    height:30px;
    width:30px;
    background-color: lightgray;
    border-radius: 100%;;
    display: ${({type})=>type==='sm' && 'none'};
    object-fit: cover;
    cursor: pointer;

` 

const Avatar = ({type, url, handleClick}) => {
  return url ? <StyledAvatar type={type} src={url} onClick={handleClick}/> : <DefaultAvatar type={type} onClick={handleClick}/>
}

export default Avatar
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

const Container = styled.div`
  background: ${({theme})=>theme.bg};
  position: sticky;
  top:0;
  height: fit-content;
  padding:20px;
`
const Wrapper = styled.div`
  display: flex;
  height:100%;
  justify-content: flex-end;
  align-items: center;
  gap:40px;
`
const Search = styled.div`
  display: flex;
  width:70%;
  align-items: center;
  justify-content: center;

  input {
    height:40px;
    width:100%;
    background-color: transparent;
    border:solid 1px ${({theme})=>theme.secondary};
    padding-left: 30px;
    border-right:none;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    outline:none;
    color: ${({theme})=>theme.text};;
    &:focus,
    &:hover{
      border:solid 1px var(--primary-color); 
    }
  }
  button{
    height:40px;
    width:80px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color:${({theme})=>theme.secondary};
    
    border:1px;
    outline:none;
    cursor: pointer;
    svg{color:${({theme})=>theme.text};}
  }
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap:40px;

  button{
    width:40px;
    height:40px;
    border-radius: 100%;
    outline: none;
    border:none;
    background-color:transparent;
    border:solid 1px ${({theme})=>theme.secondary};
    cursor: pointer;
    svg{
      color:yellow;
    }
    &:hover{
      opacity: 0.6;
    }
  }
`
const LoginButton = styled.div`
    padding:5px 12px;
    border-radius: 20px;
    outline:none;
    border:solid 1px ${({theme})=>theme.secondary};;
    cursor: pointer;
    color:${({theme})=>theme.primary};
    display: flex;
    align-items: center;
    gap:10px;
    font-weight: bold;
`
const Tags = styled.div`
  display: flex;
  align-items: center;
  gap:10px;
  margin-top:20px;
  span {
    padding:10px;
    border-radius: 6px;
    background:${({theme})=>theme.secondary};
    color:${({theme})=>theme.text};
    font-size:14px;
    cursor: pointer;
  }
`
const Navbar = ({darkMode,setDarkMode}) => {

  return (
    <Container>
      <Wrapper>
        <Search>
          <input placeholder="검색"/>
          <button><SearchOutlinedIcon /></button>
        </Search>
        <Icons>
          <button onClick={setDarkMode}>{darkMode ? <LightModeIcon/> : <NightlightIcon/>}</button>
          <LoginButton>
            <AccountCircleOutlinedIcon /> 로그인
          </LoginButton>
        </Icons>
      </Wrapper>
      <Tags>
        <span>전체</span>
        <span>음악</span>
        <span>뉴스</span>
        <span>실시간</span>
        <span>요리</span>
        <span>최근에 업로드된 영상</span>
      </Tags>
    </Container>
  )
}

export default Navbar
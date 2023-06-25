import styled from "styled-components";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "./Avatar"
import { useState } from "react";
import { logout } from "../redux/userSlice";
import {setMode  } from "../redux/themeSlice"

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
  position: relative;

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
    gap:10px;
    font-weight: bold;
    a{
      display: flex;
      align-items: center;
      color:${({theme})=>theme.primary};
    }
`
const Tags = styled.div`
  display: flex;
  align-items: center;
  gap:10px;
  margin-top:20px;
  a {
    padding:10px;
    border-radius: 6px;
    background:${({theme})=>theme.secondary};
    color:${({theme})=>theme.text};
    font-size:14px;
    cursor: pointer;
  }
`
const UserMenu = styled.ul`
  position: absolute;
  top:60px;
  right:0;
  list-style: none;
  background-color:${({theme})=>theme.darkerBg};
  color:${({theme})=>theme.lightText};
  width:220px;
  height:160px;
  gap:40px;
  box-shadow: 2px 3px 4px 4px rgba(0,0,0,0.2);
  border-radius: 10px;
  overflow: hidden;
  li {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px 20px;
    &:hover{
      opacity: 0.7;
      background-color:${({theme})=>theme.secondary};
    }
  }
`

const Navbar = () => {
  const { currentUser } = useSelector(state=>state.user);
  const { dark } = useSelector(state=>state.theme)
  const [ openUserMenu, setOpenUserMenu ] = useState(false);
  const navigate = useNavigate();
  const dispath = useDispatch();
  const handleLogout= async () => {
    dispath(logout());
    await fetch('auth/logout',{ method : 'post'});
    navigate('/login');
  }
  const handleTheme = () => {
    dispath(setMode());
  }
  return (
    <Container>
      <Wrapper>
        <Search>
          <input placeholder="검색"/>
          <button><SearchOutlinedIcon /></button>
        </Search>
        <Icons>
          <button onClick={handleTheme}>{dark ? <LightModeIcon/> : <NightlightIcon/>}</button>
          {!currentUser && <LoginButton>
            <Link to="/login">
              <AccountCircleOutlinedIcon /> 로그인
            </Link>
          </LoginButton>}
          {currentUser && <>
            <Avatar url={currentUser.avatar} handleClick={()=>setOpenUserMenu(prev=>!prev)}/>
            { openUserMenu && <UserMenu>
              <li>
                <VideoCallIcon/>
                비디오 업로드
                </li>
              <li onClick={handleLogout}>
                <LogoutIcon />
                로그아웃
              </li>
            </UserMenu>}
          </>}
        </Icons>
      </Wrapper>
      <Tags>
        <Link to="/">전체</Link>
        <Link to="/tags?tags=음악">음악</Link>
        <Link to="/tags?tags=뉴스">뉴스</Link>
        <Link to="/tags?tags=실시간">실시간</Link>
        <Link to="/tags?tags=요리">요리</Link>
        <Link to="/tags?tags=최신">최근에 업로드된 영상</Link>
      </Tags>
    </Container>
  )
}

export default Navbar
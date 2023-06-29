import { useEffect, useState } from "react";
import styled from "styled-components"
import UserDetailContent from "./UserDetailContent";
import { Link, useLocation, useNavigation } from "react-router-dom";

const Container = styled.div``

const CoverImage = styled.div`
    width:100%;
    height:180px;
    background-color: blueviolet;

`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top:40px;
    padding:0 40px;

    .user-info {
        display: flex;
        gap:20px;
        color:${({theme})=>theme.text};

        .avatar {
            width:40px;
            height:40px;
            border-radius: 50%;
            background-color:lightgray;
        }
        p{
            color:${({theme})=>theme.lightText};
            margin:10px 0;
            font-size:13px;
        }
    }

    button{
        border:none;
        outline:none;
        padding:10px 20px;
        border-radius: 6px;
        background-color: ${({theme})=>theme.darkerBg};
        color: ${({theme})=>theme.lightText};
        cursor: pointer;
        align-self: flex-start;
        &:hover{
            opacity: 0.8;
        }
    }
`;

const UserNav = styled.nav`
    margin-top: 40px;
    border-bottom: solid 2px ${({theme})=>theme.darkerBg};

`;
const NavList = styled.ul`
    display: flex;
    margin-left:40px;
`;

const Item = styled.li`
    list-style: none;
    color:${({theme})=>theme.text};
    cursor: pointer;
    padding:16px 20px;
    border-bottom: solid 3px transparent;
    transition: all .5s ease-in-out;

    background-color: ${({theme,isActive})=> isActive ? theme.darkerBg :'transparent'};

    &:hover{
        background-color: ${({theme})=>theme.darkerBg};
        border-bottom:solid 3px ${({theme})=>theme.darkerBg};
    }
`;
const Contents = styled.div``;


const UserDetail = () => {
    const location = useLocation();
    const [activeNav, setActiveNav] = useState('featured')
    const userId = location.pathname.split('/')[3];

    const handleNav = activeNav => {
        setActiveNav(activeNav);
    }
    
    useEffect(() => {



    },[activeNav])


    return (
        <Container>
            <CoverImage />
            <Header>
                <div className="user-info">
                    <div className="avatar" />
                    <div className="info">
                        <h3>금금</h3>
                        <p>@Gold_Dokki구독자 6.75만명동영상 67개</p>
                        <p>금이의 즐거운 영상 창고.</p>
                    </div>
                </div>
                <button>구독</button>
            </Header>
            <UserNav>
                <NavList>
                    <Link to={`/user/${userId}/featured`}><Item>홈</Item></Link>
                    <Link to={`/user/${userId}/videos`}><Item>동영상</Item></Link>
                    <Link to={`/user/${userId}/shorts`}><Item>SHORTS</Item></Link>
                    <Link to={`/user/${userId}/community`}><Item>커뮤니티</Item></Link>
                    <Link to={`/user/${userId}/channel`}><Item>채널</Item></Link>
                    <Link to={`/user/${userId}/information`}><Item>정보</Item></Link>
                    <Link to={`/user/${userId}/search`}><Item>검색</Item></Link>
                </NavList>
            </UserNav>
        </Container>
    )
}

export default UserDetail
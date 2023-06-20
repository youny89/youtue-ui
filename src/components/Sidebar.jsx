import styled from 'styled-components'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MenuIcon from '@mui/icons-material/Menu';

const Container = styled.div`
    flex:2;    
    background-color: ${({theme})=>theme.bg};
    color:${({theme})=>theme.base};;
    height:100vh;
    position:sticky;
    top:0;
    overflow-y: hidden;

    &:hover{
        overflow-y: auto;
    }
    &::-webkit-scrollbar {
         width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: #ccc;
    }

`
const Wrapper = styled.div`
    padding:20px;
`
const Logo = styled.div`
    padding-left:8px;
    display: flex;
    align-items: center;
    gap:6px;
    margin-bottom:30px;
    color:${({theme})=>theme.text};
    button{
        background-color: transparent;
        border:none;
        outline:none;
        font-size:18px;
        color:${({theme})=>theme.text};
        margin-right:20px;
        cursor: pointer;
    }
`
const LogoImg = styled.img`
    height:20px;
`
const LogoText = styled.span`
    font-weight: bolder;
`
const Item = styled.div`
    display : flex;
    align-items: center;
    gap:30px;
    color:${({theme})=>theme.base};;
    padding:8px;
    border-radius: 8px;
    transition: 500ms;
    cursor: pointer;
    margin-bottom:10px;
    svg{
        color:${({theme})=>theme.lightText};
    }
    &:hover {
        background:${({theme})=>theme.secondary};
        color:${({theme})=>theme.text};
    }
`
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.2px solid ${({ theme }) => theme.divider};
`;

const Login = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    padding:10px;
    p{
        font-size: 12px;
        text-align: center;
        line-height: 18px;
    }
    button {
        padding:4px 12px;
        border-radius: 6px;
        outline:none;
        border:solid 1px var(--primary-color);
        cursor: pointer;
        color:var(--primary-color);
        display: flex;
        align-items: center;
        gap:10px;
        font-weight: bold;
    }
`
const Title = styled.div`
    font-size:14px;
    color:gray;
    font-weight:500;
    margin-bottom: 20px;
`
const Sidebar = () => {

  return (
    <Container>
        <Wrapper>
            <Link>
                <Logo>
                    <button><MenuIcon/></button>
                    <LogoImg src="/logo.png" alt='logo'/>
                    <LogoText>Youtube</LogoText>
                </Logo>
            </Link>
            <Item>
                <HomeIcon/>
                홈
            </Item>
            <Item>
                <ExploreOutlinedIcon />
                탐색
            </Item>
            <Item>
                <ThumbUpAltIcon />
                좋아요 표시한 동영상
            </Item>
            <Hr />
            <Item>
                <VideoLibraryOutlinedIcon />
                구독
            </Item>
            <Item>
                <HistoryOutlinedIcon />
                시청기록
            </Item>

            <Hr />
            <Login>
                <p>로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다</p>
                <button>
                    <AccountCircleOutlinedIcon/>
                    로그인
                </button>
            </Login>
            <Hr />
            {/* 내가 구독한 채널 리스트 */}
            <Title>탐색</Title>
            <Item>
                <LibraryMusicOutlinedIcon />
                음악
            </Item>
            <Item>
                <SportsBasketballOutlinedIcon />
                스포츠
            </Item>
            <Item>
                <SportsEsportsOutlinedIcon />
                게임
            </Item>
            <Item>
                <MovieOutlinedIcon />
                영화
            </Item>
            <Item>
                <ArticleOutlinedIcon />
                뉴스
            </Item>
            <Item>
                <LiveTvOutlinedIcon />
                실시간
            </Item>
            <Hr />
            <Item>
                <SettingsOutlinedIcon />
                설정
            </Item>
            <Item>
                <FlagOutlinedIcon />
                신고기록
            </Item>
            <Item>
                <HelpOutlineOutlinedIcon />
                의견 보내기
            </Item>
        </Wrapper>
    </Container>
  )
}

export default Sidebar
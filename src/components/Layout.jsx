import styled from "styled-components"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"


const Container = styled.div`
  display:flex;
  background-color: ${({theme})=>theme.bg};
  height: 100%;;
`
const Main = styled.div`
  flex:8;
  background-color: ${({ theme }) => theme.bg};
  margin-bottom:100px;
  height:100%;
`
const Wrapper = styled.div`
  padding:20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap:16px;
`

const Layout = () => {
  
  return (
    <Container>
        <Sidebar />
        <Main>
            <Navbar/>
            <Outlet />
        </Main>
  </Container>
  )
}

export default Layout
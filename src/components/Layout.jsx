import styled from "styled-components"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Container = styled.div`
  display:flex;
  background-color: ${({theme})=>theme.bg};
  min-height: 100%;;
`
const Main = styled.div`
  flex:8;
  background-color: ${({ theme }) => theme.bg};
  margin-bottom:100px;
  min-height: 100%;;
`

const Layout = (props) => {

  return (
    <Container>
        <Sidebar />
        <Main>
            <Navbar showTags={props.showTags}/>
            <Outlet />
        </Main>
  </Container>
  )
}

export default Layout
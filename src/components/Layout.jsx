import { Container, Stack } from "@chakra-ui/react"
import Footer from "./Footer"
import Headers from "./Headers"
import NavBar from "./NavBar"
import { Outlet } from "react-router-dom"

const Layout = ({ value }) => {
  return (
    <>
    <Stack minH={"100vh"}>
      <Container maxWidth={"120px"}>
        <Headers/>
        <NavBar value={value}/>
        <Outlet />
        <Footer />
      </Container>
    </Stack>
    </>
  )
}

export default Layout
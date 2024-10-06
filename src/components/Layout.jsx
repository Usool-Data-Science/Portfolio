// import { Container, Stack } from "@chakra-ui/react"
import Footer from "./Footer"
import Headers from "./Headers"
// import NavBar from "./NavBar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Headers />
      {/* <NavBar /> */}
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
import React,{ReactNode} from 'react'
import Navbar from "./navigation/NavBar"
import Footer from "./footer"

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
    </div>
  )
}

export default Layout
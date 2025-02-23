import React,{ReactNode} from 'react'
import Navbar from "./navigation/NavBar"

const Layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <Navbar></Navbar>
        <main>{children}</main>
        
    </div>
  )
}

export default Layout
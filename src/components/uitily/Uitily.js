import React from 'react'
import Footers from './footer/footer'
import Navbars from './navbar/Navbar';
import { Outlet } from 'react-router-dom'

const Uitily = () => {
  return (
    <div style={{width: "100%"}}>
      <Navbars />
      <Outlet />
      <Footers />
    </div>
  )
}

export default Uitily

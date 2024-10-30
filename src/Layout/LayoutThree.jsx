import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Navber2 from '../Components/Navber2'
import SideNav from '../Components/Navber/SideNav'
import Sidenav3 from '../Components/Navber/Sidenav3'

const LayoutThree = () => {
  return (
    <div>
        <Navber2 />
        <div className=" flex justify-center items-center ">
        <Outlet />
        <Sidenav3 />

        </div>
        <Footer />
    </div>
  )
}

export default LayoutThree
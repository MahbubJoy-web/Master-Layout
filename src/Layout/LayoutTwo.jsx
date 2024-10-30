import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../Components/Navber/Navber'
import SideNav from '../Components/Navber/SideNav'

const LayoutTwo = () => {
  return (
    <div className="">
        <Navber />
        <div className="secend flex items-center ">

        <SideNav />
        <Outlet />
        </div>
    </div>
  )
}

export default LayoutTwo
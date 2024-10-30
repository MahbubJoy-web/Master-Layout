import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../Components/Navber/Navber'
import Footer from '../Components/Footer/Footer'

const LayoutOne = () => {
  return (
    <>
    <Navber />
    <Outlet />
    <Footer />
    </>
  )
}

export default LayoutOne
import React from 'react'
import './Navber.css'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <div className='main'>
        <div className="container">
            <div className="content">
                <div className="logo">
                    <img src="https://png.pngtree.com/png-vector/20211023/ourmid/pngtree-salon-logo-png-image_4004444.png" alt="" />
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/LayoutTwo">Services</Link></li>
                    <li><Link to="/LayoutTwo/help">Help</Link></li>
                    <li><Link to="/LayoutThree">HeadPage</Link></li>
                    <li><Link to="/LayoutThree/Bike">Bike</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navber
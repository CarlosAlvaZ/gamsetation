import React from 'react'
import { Outlet } from 'react-router-dom'
import '../styles/navbar.css'
import logo from '../imgs/logo.png'

export default function Navbar() {
    return (
      <>
        <div className='navbar'>
            <img src={logo} alt='logo' />
            <div className='text'>
                <h1>Game<span>Station</span></h1>
            </div>
        </div>
        <Outlet />
      </>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header>
      <NavLink to='/' className='links'>
        <p>Easy Decision Maker</p>
      </NavLink>
    </header>
  )
}

export default Header

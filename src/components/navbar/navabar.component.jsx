import { Fragment } from 'react'

import { ReactComponent } from 'react'

import './navbar.styles.css'
import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <Fragment>
        <header>
            <NavLink className="" to={}>ZARA</NavLink>
            <nav className='nav-container'></nav>
        </header>
        <Outlet />
    </Fragment>
  )
}

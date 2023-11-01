import { Fragment } from 'react'

import { ReactComponent } from 'react'

import './navbar.styles.css'
import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
  return (
    <Fragment>
        <header>
            <NavLink className="" to="/">ZARA</NavLink>
            <nav className='nav-container'>
                <NavLink></NavLink>
            </nav>
        </header>
        <Outlet />
    </Fragment>
  )
}

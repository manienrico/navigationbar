import { Fragment } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/logotype.svg'

import './navbar.styles.css'

export default function Navbar() {
  return (
    <Fragment>
        <header>
            <NavLink className="" to="/">
              <Logo />
            </NavLink>
            <nav>
                {/* <NavLink></NavLink> */}
                <ul>
                  <li><NavLink to="home" className="navlink level1">Home</NavLink></li>
                  <li><NavLink className="navlink level1 collections">Collections</NavLink>
                    <ul className="level2-container">
                      <li><NavLink className="navlink level2">Summer Collections</NavLink></li>
                      <li><NavLink className="navlink level2">Sale 40% Off</NavLink></li>
                      <li><NavLink className="navlink level2">Ceramics</NavLink></li>
                      <li><NavLink className="navlink level2">Melamina</NavLink></li>
                    </ul>
                  </li>
                  <li><NavLink to="about" className="navlink level1">About</NavLink></li>
                  <li><NavLink to="contact" className="navlink level1">Contact</NavLink></li>
                  <li><NavLink to="shop" className="navlink level1">Shop</NavLink></li>
                </ul>
            </nav>
        </header>
        <Outlet />
    </Fragment>
  )
}

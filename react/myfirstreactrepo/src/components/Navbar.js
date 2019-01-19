import React from 'react'
import Bulma from 'bulma'
import { 
  Navbar, NavbarStart, NavbarItem, NavbarMenu 
} from 'bloomer'
import { Link } from "react-router-dom"

const NavbarQtemu = (props) => {
  return (
    <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
      <NavbarMenu>
        <NavbarStart>
          <Link to="/">
            <NavbarItem>{props.menu.appname}</NavbarItem>
          </Link>
          <Link to="/create-meetup">
            <NavbarItem>{props.menu.create}</NavbarItem>
          </Link>
          <Link to="/explore">
            <NavbarItem>{props.menu.explore}</NavbarItem>
          </Link>
        </NavbarStart>
      </NavbarMenu>
    </Navbar>
  )
}

export default NavbarQtemu
import React from 'react'
import Bulma from 'bulma'
import { 
  Navbar, NavbarStart, NavbarItem, NavbarMenu 
} from 'bloomer'

const NavbarQtemu = (props) => {
  return (
    <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
      <NavbarMenu>
        <NavbarStart>
          <NavbarItem href='#/'>{props.menu.appname}</NavbarItem>
          <NavbarItem href='#/'>{props.menu.create}</NavbarItem>
          <NavbarItem href='#/'>{props.menu.explore}</NavbarItem>
        </NavbarStart>
      </NavbarMenu>
    </Navbar>
  )
}

export default NavbarQtemu
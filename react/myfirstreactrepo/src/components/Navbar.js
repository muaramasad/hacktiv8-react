import React from 'react'
import { connect } from 'react-redux'
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
            <NavbarItem>{props.appName}</NavbarItem>
          </Link>
          <Link to="/create-meetup">
            <NavbarItem>{props.create}</NavbarItem>
          </Link>
          <Link to="/explore">
            <NavbarItem>{props.explore}</NavbarItem>
          </Link>
        </NavbarStart>
      </NavbarMenu>
    </Navbar>
  )
}


const mapStateToProps = (state) => ({
  appName: state.appname,
  create: state.create,
  explore: state.explore,
})

export default connect(mapStateToProps)(NavbarQtemu);
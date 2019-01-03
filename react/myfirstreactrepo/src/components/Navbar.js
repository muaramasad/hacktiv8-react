import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
  render() {
    return (
      <ul>
         <li> <a href="#home">{this.props.menu.appname}</a></li>
         <li><a href="#create">{this.props.menu.create}</a></li>
         <li><a href="#Explore">{this.props.menu.explore}</a></li>
         <li className="right-side"><a href="#Explore">Login</a></li>
      </ul>
    )
  }
}

Navbar.propTypes = {
   menu: PropTypes.shape({
      appname: PropTypes.string.isRequired,
      menu: PropTypes.string,
      explore: PropTypes.string,
   })
}

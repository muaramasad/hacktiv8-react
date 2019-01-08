import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <ul>
         <li> <a href="#home">{props.menu.appname}</a></li>
          <li><a href="#create">{props.menu.create}</a></li>
          <li><a href="#Explore">{props.menu.explore}</a></li>
          <li className="right-side"><a href="#Explore">Login</a></li>
      </ul>
    </div>
  )
}

export default Navbar
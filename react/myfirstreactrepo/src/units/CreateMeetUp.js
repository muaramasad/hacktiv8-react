import React, { Component } from 'react'
import NavbarQtemu from './../components/Navbar'

import NewMeetupForm from './../components/NewMeetupForm'
import FooterQtemu from './../components/Footer'

export default class CreateMeetUp extends Component {
  constructor(){
   super()
   this.state = {
      menu: {
         appname: "QTemu",
         create: "Create Meetup",
         explore: "Explore"
      },
   }
  }
  render() {
    return (
      <div>
        <NavbarQtemu menu={this.state.menu}/>
        <NewMeetupForm title={this.props.title}/>
        <FooterQtemu />
      </div>
    )
  }
}

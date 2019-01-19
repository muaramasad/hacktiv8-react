import React, { Component } from 'react'
import NavbarQtemu from './../components/Navbar'

import Pastmeetup from './../components/Pastmeetup';
import FooterQtemu from './../components/Footer'

const mt10 = {
   marginTop: '20px'
}

export default class CreateMeetUp extends Component {
  constructor(){
   super()
   this.state = {
      title: 'Explore',
      menu: {
         appname: "QTemu",
         create: "Create Meetup",
         explore: "Explore"
      },
      pastmeetup: [
         {
           date: "21 December 2018",
           title: "#39 JakartaJS April Meetup with Kumparan",
           attendant: 139
         },
         {
           date: "28 December 2018",
           title: "#40 JakartaJS May Meetup with Kumparan",
           attendant: 178
         },
         {
           date: "03 January 2019",
           title: "#41 JakartaJS May Meetup with Kumparan",
           attendant: 145
         }
       ]
   }
  }
  render() {
    return (
      <div>
        <NavbarQtemu menu={this.state.menu}/>
        <Pastmeetup style={mt10} pastmeetupdata={this.state.pastmeetup} title={this.props.title}></Pastmeetup>
        <FooterQtemu />
      </div>
    )
  }
}

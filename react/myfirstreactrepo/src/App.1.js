import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import Axios from 'axios';

import NavbarQtemu from './components/Navbar.js';
import Profile from './components/Profile.js';
import Nextmeetup from './components/Nextmeetup';
import Aboutmeetup from './components/Aboutmeetup';
import Membersmeetup from './components/Membersmeetup';
import Pastmeetup from './components/Pastmeetup';
import FooterQtemu from './components/Footer';


class App extends Component {
  constructor(){
    super()
    this.state = {
      menu: {
        appname: "QTemu",
        create: "Create Meetup",
        explore: "Explore"
      },
      profile: {
        location: "Bandung, Indonesia",
        title: "Hactiv8 Meetup",
        member: 1087,
        organizer: "Ardhy Winata",
      },
      nextmeetup: {
        title: "Awesome meetup and event",
        date: "20 December 2018",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      aboutmeetup: {
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
      },
      membersmeetup: {
        member: "Muharram"
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
      // <div className="App">
      //     {/* Navbar */}
      //     <Navbar menu={this.state.menu}/>
      //     {/* Profile */}
      //     <Profile profiledata={this.state.profile}/>
      //     {/* Next Meetup */}
      //     <Nextmeetup nextmeetupdata={this.state.nextmeetup}/>
      //     {/* About Meetup */}
      //     <Aboutmeetup aboutmeetupdata={this.state.aboutmeetup}/>
      //     {/* Members Meetup */}
      //     <Membersmeetup membersmeetupdata={this.state.membersmeetup}/>
      //     {/* Past Meetup */}
      //     <Pastmeetup pastmeetupdata={this.state.pastmeetup}/>
      //     {/* Footer */}
      //     <Footer />
      // </div>
      <div>
        <NavbarQtemu menu={this.state.menu}/>
        <Profile profiledata={this.state.profile}/>
        <Nextmeetup nextmeetupdata={this.state.nextmeetup}/>
        <Aboutmeetup aboutmeetupdata={this.state.aboutmeetup}/>
        <Membersmeetup membersmeetupdata={this.state.membersmeetup}/>
        <Pastmeetup pastmeetupdata={this.state.pastmeetup}/>
        <FooterQtemu />
      </div>
    );
  }
}

export default App;

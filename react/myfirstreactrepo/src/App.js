import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* Navbar */}
          <ul>
              <li> <a href="#home">QTemu</a></li>
              <li><a href="#create">Create Meetup</a></li>
              <li><a href="#Explore">Explore</a></li>
              <li className="right-side"><a href="#Explore">Login</a></li>
          </ul>
          {/* Profile */}
          <div className="profile bg-lightgray display-flex">
            <div className="profile-picture"></div>
            <div className="profile-info">
              <h2>Hactiv8 Meetup</h2>
              <p>Location Jakarta, Indonesia</p>
              <p>Member 1,078</p>
              <p>Organizer Ardhy Winata</p>
              <button className="btn-joinus">Join Us</button>
            </div>
          </div>
          {/* Next Meetup */}
          <div className="title">
            <h2>Next Meetup</h2>
          </div>
          <div className="meetup bg-lightgray display-block">
            <h3>Awesome meetup and event</h3>
            <p className="meetup-date">20 December 2018</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          {/* About Meetup */}
          <div className="title">
            <h2>About Meetup</h2>
          </div>
          <div className="meetup nopadding">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
          {/* Members Meetup */}
          <div className="title">
            <h2>Members<span className="see-all">See All</span></h2>
          </div>
          <div className="meetup bg-lightgray display-flex">
            <div className="circle-picture">
            </div>
            <div className="member-info">
              <h4>Organizer</h4>
              <p>Ardhy Wiranata 4 others</p>
            </div>
          </div>
          {/* Past Meetup */}
          <div className="title">
            <h2>Past Meetup<span className="see-all">See All</span></h2>
          </div>
          <div className="meetup display-flex nopadding">
            <div className="meetup-info bg-lightgray">
              <div className="meetup-info-date font-bold">
                21 December 2018
              </div>
              <div className="meetup-info-content font-bold">
                #39 JakartaJS April Meetup with Kumparan
                <p>139 <span style={
                  {color:"white"}
                }>went</span></p>
                <button className="meetup-info-btn-view">View</button>
              </div>
            </div>
            <div className="meetup-info bg-lightgray">
              <div className="meetup-info-date font-bold">
                21 December 2018
              </div>
              <div className="meetup-info-content font-bold">
                #39 JakartaJS April Meetup with Kumparan
                <p>139 <span style={
                  {color:"white"}
                }>went</span></p>
                <button className="meetup-info-btn-view">View</button>
              </div>
            </div>
            <div className="meetup-info bg-lightgray">
              <div className="meetup-info-date font-bold">
                21 December 2018
              </div>
              <div className="meetup-info-content font-bold">
                #39 JakartaJS April Meetup with Kumparan
                <p>139 <span style={
                  {color:"white"}
                }>went</span></p>
                <button className="meetup-info-btn-view">View</button>
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer className="footer">
            <div>
              Copyright Hacktiv8 2018
            </div>
          </footer>
      </div>
    );
  }
}

export default App;

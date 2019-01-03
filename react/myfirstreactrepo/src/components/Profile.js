import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Profile extends Component {
  render() {
    return (
      <div className="profile bg-lightgray display-flex">
         <div className="profile-picture"></div>
         <div className="profile-info">
            <h2>{this.props.profiledata.title}</h2>
            <p>Location {this.props.profiledata.location}</p>
            <p>Member {this.props.profiledata.member}</p>
            <p>Organizer {this.props.profiledata.organizer}</p>
            <button className="btn-joinus">Join Us</button>
         </div>
      </div>
    )
  }
}

Profile.propTypes = {
   profiledata: PropTypes.shape({
      location: PropTypes.string.isRequired,
      title: PropTypes.string,
      member: PropTypes.number,
      organizer: PropTypes.string,
   })
}

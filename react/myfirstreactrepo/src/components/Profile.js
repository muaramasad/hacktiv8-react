// Profile.propTypes = {
//    profiledata: PropTypes.shape({
//       location: PropTypes.string.isRequired,
//       title: PropTypes.string,
//       member: PropTypes.number,
//       organizer: PropTypes.string,
//    })
// }

import React from 'react'

const Profile = (props) => {
   return (
      <div className="profile bg-lightgray display-flex">
         <div className="profile-picture"></div>
         <div className="profile-info">
            <h2>{props.profiledata.title}</h2>
            <p>Location {props.profiledata.location}</p>
            <p>Member {props.profiledata.member}</p>
            <p>Organizer {props.profiledata.organizer}</p>
            <button className="btn-joinus">Join Us</button>
         </div>
      </div>
   )
}

export default Profile
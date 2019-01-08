// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// export default class Membersmeetup extends Component {
//   render() {
//     return (
//       <div>
//         <div className="title">
//             <h2>Members<span className="see-all">See All</span></h2>
//           </div>
//           <div className="meetup bg-lightgray display-flex">
//             <div className="circle-picture">
//             </div>
//             <div className="member-info">
//               <h4>Organizer</h4>
//               <p>{this.props.membersmeetupdata.member} 4 others</p>
//             </div>
//           </div>
//       </div>
//     )
//   }
// }

// Membersmeetup.propTypes = {
//    membersmeetupdata: PropTypes.shape({
//       member: PropTypes.string,
//    })
// }

import React from 'react'

const Membersmeetup = (props) => {
  return (
    <div>
      <div className="title">
          <h2>Members<span className="see-all">See All</span></h2>
        </div>
        <div className="meetup bg-lightgray display-flex">
          <div className="circle-picture">
          </div>
          <div className="member-info">
            <h4>Organizer</h4>
            <p>{props.membersmeetupdata.member} 4 others</p>
          </div>
        </div>
    </div>
  )
}

export default Membersmeetup 
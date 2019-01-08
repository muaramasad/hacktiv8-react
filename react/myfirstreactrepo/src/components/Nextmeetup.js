// Nextmeetup.propTypes = {
//    nextmeetupdata: PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       date: PropTypes.string,
//       description: PropTypes.string,
//    })
// }

import React from 'react'

const Nextmeetup = (props) => {
   return (
      <div>
         <div className="title">
            <h2>Next Meetup</h2>
         </div>
         <div className="meetup bg-lightgray display-block">
            <h3>{props.nextmeetupdata.title}</h3>
            <p className="meetup-date">{props.nextmeetupdata.date}</p>
            <p>{props.nextmeetupdata.description}</p>
         </div>
      </div>
   )
}

export default Nextmeetup
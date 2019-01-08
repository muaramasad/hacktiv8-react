// Aboutmeetup.propTypes = {
//    aboutmeetupdata: PropTypes.shape({
//       description: PropTypes.string,
//    })
// }

import React from 'react'

const Aboutmeetup = (props) => {
  return (
    <div>
    <div className="title">
          <h2>About Meetup</h2>
        </div>
        <div className="meetup nopadding">
          <p>{props.aboutmeetupdata.description}</p>
    </div>
    </div>
  )
}

export default Aboutmeetup
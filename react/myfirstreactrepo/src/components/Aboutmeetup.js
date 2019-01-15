// Aboutmeetup.propTypes = {
//    aboutmeetupdata: PropTypes.shape({
//       description: PropTypes.string,
//    })
// }

import React from 'react'
import Bulma from 'bulma'
import { 
  Container, Column, Columns, Title, Box
} from 'bloomer'

const mb10 = {
  marginBottom: '20px'
}

const Aboutmeetup = (props) => {
  return (
    // <div>
    // <div className="title">
    //       <h2>About Meetup</h2>
    //     </div>
    //     <div className="meetup nopadding">
    //       <p>{props.aboutmeetupdata.description}</p>
    // </div>
    // </div>
    <Container style={mb10}>
      <Title isSize={3}>About Meetup</Title>
      <Box>
        <p className="meetup-date">{props.aboutmeetupdata.description}</p>
      </Box>
    </Container>
  )
}

export default Aboutmeetup
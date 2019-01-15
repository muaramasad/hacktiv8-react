// Nextmeetup.propTypes = {
//    nextmeetupdata: PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       date: PropTypes.string,
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

const Nextmeetup = (props) => {
   return (
      // <div>
      //    <div className="title">
      //       <h2>Next Meetup</h2>
      //    </div>
      //    <div className="meetup bg-lightgray display-block">
      //       <h3>{props.nextmeetupdata.title}</h3>
      //       <p className="meetup-date">{props.nextmeetupdata.date}</p>
      //       <p>{props.nextmeetupdata.description}</p>
      //    </div>
      // </div>
      <Container style={mb10}>
         <Title isSize={3}>Next Meetup</Title>
         <Box>
            <Title isSize={3}>{props.nextmeetupdata.title}</Title>
            <p className="meetup-date">{props.nextmeetupdata.date}</p>
            <p>{props.nextmeetupdata.description}</p>
         </Box>
      </Container>
   )
}

export default Nextmeetup
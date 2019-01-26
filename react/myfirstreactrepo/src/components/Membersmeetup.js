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
import { 
  Container, Column, Columns, Title, Box, Image
} from 'bloomer'

const mb10 = {
  marginBottom: '20px'
}

const seeAll = {
  fontSize: '15px',
  float:'right',
  fonWeight: 'normal',
  marginTop: '10px'
};

const Membersmeetup = (props) => {
  return (
    // <div>
    //   <div className="title">
    //       <h2>Members<span className="see-all">See All</span></h2>
    //     </div>
    //     <div className="meetup bg-lightgray display-flex">
    //       <div className="circle-picture">
    //       </div>
    //       <div className="member-info">
    //         <h4>Organizer</h4>
    //         <p>{props.membersmeetupdata.member} 4 others</p>
    //       </div>
    //     </div>
    // </div>
    <Container style={mb10}>
      <Title isSize={3}>Members <span style={seeAll}>See All</span></Title>
      <Box>
        <Columns>
          <Column isSize='1/4'>
            <Image isSize="128x128" src="https://via.placeholder.com/128x128" />
          </Column>
          <Column isSize='3/4'>
            <Title isSize={4}>Organizer</Title>
            <p>{props.membersmeetupdata.member} 4 others</p>
          </Column>
        </Columns>
      </Box>
    </Container>
  )
}

export default Membersmeetup 
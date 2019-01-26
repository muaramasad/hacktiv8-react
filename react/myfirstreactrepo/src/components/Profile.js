// Profile.propTypes = {
//    profiledata: PropTypes.shape({
//       location: PropTypes.string.isRequired,
//       title: PropTypes.string,
//       member: PropTypes.number,
//       organizer: PropTypes.string,
//    })
// }

import React from 'react'
import { 
  Container, Columns, Column, Image, Title, Button, Icon
} from 'bloomer'
import Banner from './img/banner.jpg'

import { connect } from 'react-redux'

const mt10 = {
   marginTop: '20px'
}

const mb5 = {
   marginBottom: '10px'
}

const mb10 = {
   marginBottom: '20px'
}

const Profile = (props) => {
   return (
      // <div className="profile bg-lightgray display-flex">
      //    <div className="profile-picture"></div>
      //    <div className="profile-info">
      //       <h2>{props.profiledata.title}</h2>
      //       <p>Location {props.profiledata.location}</p>
      //       <p>Member {props.profiledata.member}</p>
      //       <p>Organizer {props.profiledata.organizer}</p>
      //       <button className="btn-joinus">Join Us</button>
      //    </div>
      // </div>
      <Container style={mb10}>
         <Columns isCentered>
         <Column isSize='1/4'>
            <Image isRatio="square" src={Banner} />
          </Column>
          <Column isSize='3/4'>
            <div style={mt10}>
               <Title isSize={3}>{props.name}</Title>
               <p style={mb5}><Icon hasTextColor="gray" isSize="small" className="fa fa-map-marker" /> Location {props.location}</p>
               <p style={mb5}><Icon isSize="small" className="fa fa-user" /> Member {props.members}</p>
               <p style={mb5}><Icon isSize="small" className="fa fa-calendar-check" /> Organizer {props.organizedBy}</p>
               <Button isColor="info" style={mt10}>
               Join Us
               </Button>
            </div>
          </Column>
         </Columns>
      </Container>
   )
}

const mapStateToProps = (state) => ({
   name: state.name,
   location: state.location,
   members: state.members,
   organizedBy: state.organizedBy
})

export default connect(mapStateToProps)(Profile);
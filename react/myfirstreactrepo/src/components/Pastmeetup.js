import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Bulma from 'bulma'
import { 
  Container, Column, Columns, Title, Box, Image, Button
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

export default class Pastmeetup extends Component {
  render() {
    return (
      // <div>
      //   <div className="title">
      //       <h2>Past Meetup<span className="see-all">See All</span></h2>
      //    </div>
      //    <div className="meetup display-flex nopadding">
      //       {this.props.pastmeetupdata.map((data,index) => {
      //          return <div key={index} className="meetup-info bg-lightgray">
      //          <div className="meetup-info-date font-bold">
      //           {data.date}
      //          </div>
      //          <div className="meetup-info-content font-bold">
      //          {data.title}
      //           <p>{data.attendant} <span style={
      //             {color:"white"}
      //           }>went</span></p>
      //           <button className="meetup-info-btn-view">View</button>
      //          </div>
      //       </div>
      //       })}
      //    </div>
      // </div>
      <Container style={mb10}>
         <Title isSize={3}>Past Meetup <span style={seeAll}>See All</span></Title>
         <Columns>
            {this.props.pastmeetupdata.map((data,index) => {
               return <Column key={index} isSize='1/3'>
                  <Box>
                     <p>{data.date}</p>
                     <Title isSize={4}>{data.title}</Title>
                     <p><span>{data.attendant} went</span></p>
                     <Button isColor="info">Join Us</Button>
                  </Box>
               </Column>
            })}  
         </Columns>
      </Container>
    )
  }
}
Pastmeetup.propTypes = {
   pastmeetupdata: PropTypes.arrayOf(PropTypes.shape({    
      date: PropTypes.string.isRequired,    
      title: PropTypes.string.isRequired,  
      attendant: PropTypes.number.isRequired,
   }))
}
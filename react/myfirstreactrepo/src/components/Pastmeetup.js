import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Pastmeetup extends Component {
  render() {
    return (
      <div>
        <div className="title">
            <h2>Past Meetup<span className="see-all">See All</span></h2>
         </div>
         <div className="meetup display-flex nopadding">
            {this.props.pastmeetupdata.map(data => {
               return <div className="meetup-info bg-lightgray">
               <div className="meetup-info-date font-bold">
                {data.date}
               </div>
               <div className="meetup-info-content font-bold">
               {data.title}
                <p>{data.attendant} <span style={
                  {color:"white"}
                }>went</span></p>
                <button className="meetup-info-btn-view">View</button>
               </div>
            </div>
            })}
         </div>
      </div>
    )
  }
}

Pastmeetup.propTypes = {
   pastmeetupdata: PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string,
      attendant: PropTypes.number,
   })
}

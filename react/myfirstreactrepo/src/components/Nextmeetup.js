import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Nextmeetup extends Component {
  render() {
    return (
   <div>
   <div className="title">
      <h2>Next Meetup</h2>
    </div>
   <div className="meetup bg-lightgray display-block">
      <h3>{this.props.nextmeetupdata.title}</h3>
      <p className="meetup-date">{this.props.nextmeetupdata.date}</p>
      <p>{this.props.nextmeetupdata.description}</p>
   </div>
   </div>
    )
  }
}

Nextmeetup.propTypes = {
   nextmeetupdata: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string,
      description: PropTypes.string,
   })
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Aboutmeetup extends Component {
  render() {
    return (
      <div>
      <div className="title">
            <h2>About Meetup</h2>
          </div>
          <div className="meetup nopadding">
            <p>{this.props.aboutmeetupdata.description}</p>
      </div>
      </div>
    )
  }
}

Aboutmeetup.propTypes = {
   aboutmeetupdata: PropTypes.shape({
      description: PropTypes.string,
   })
}
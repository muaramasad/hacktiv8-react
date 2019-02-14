import React, { Component } from 'react'

export default class Tag extends Component {
  render() {
    return (
        <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-xs font-semibold text-grey-darker mr-2">{this.props.genreName}</span>
    )
  }
}

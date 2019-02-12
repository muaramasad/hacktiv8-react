import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <button class="py-4 px-8 mt-4 text-sm font-black border border-orange-dark hover:border-orange-dark text-orange-dark bg-white uppercase rounded font-mono">{this.props.textBtn}</button>
    )
  }
}

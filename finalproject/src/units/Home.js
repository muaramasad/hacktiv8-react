import React, { Component } from 'react';
import Navbar from './../components/Navbar';

export default class home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto">
            <p className="font-sans text-lg text-grey-darkest text-center">
               I'm a sans-serif paragraph.
            </p>
         </div>
      </div>
    )
  }
}

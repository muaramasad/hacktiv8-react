import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="flex items-center justify-between flex-wrap bg-white p-6">
          <div className="flex items-center flex-no-shrink text-grey-darker mr-6">
            <svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 18 18" width="28" height="28"><path id="XMLID_391_" fill="#F05A28" d="M10.5,5.6l6.6,5.3c0.8,0.6,1.1,1.6,0.8,2.6l-1.2,4.1c-1.1,3.3-4.1-17.4-7.6-17.4h0 c-3.5,0-6.6,20.7-7.7,17.3l-1.3-4.1c-0.3-0.9,0-1.8,0.8-2.3l6.9-5.5C8.5,5,9.6,5,10.5,5.6z"></path></svg>
            <span className="font-semibold text-xl tracking-tight">	&nbsp;Adamusik</span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              
            </div>
            <div>
            <a href="/events" className="block mt-4 lg:inline-block lg:mt-0 text-grey-dark hover:text-grey-darker no-underline mr-4">
                Acara Musik
              </a>
              <a href="/artists" className="block mt-4 lg:inline-block lg:mt-0 text-grey-dark hover:text-grey-darker no-underline mr-4">
                Musisi & Band
              </a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

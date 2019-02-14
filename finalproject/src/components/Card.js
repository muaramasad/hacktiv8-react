import React, { Component } from 'react'
import Tag from './../components/Tag'

export default class Card extends Component {
  render() {
    return (

         <div className="flex-1 px-4 py-2 m-2 border-grey-light">
        <a href="#" className="no-underline text-grey-darkest">
            <div className="rounded overflow-hidden shadow-lg my-2 bg-white">
               <div className="w-full h-64" style={{background:'url(' + this.props.img + ') center top / cover'}}></div>
               <div className="px-6 py-4"><div className="font-bold text-xl mb-2">{this.props.title}</div> <p className="text-grey-darker text-base"><i aria-hidden="true" className="fa fa-map-marker"></i> {this.props.location}</p></div> 
               <div className="px-6 py-4">
               {this.props.genres.map((data,index) => {
                  return <Tag key={index} genreName={data} />
               })}
               </div>
            </div>
         </a>
         </div>
    )
  }
}

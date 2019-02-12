import React, { Component } from 'react'
import Tag from './../components/Tag'

export default class Card extends Component {
  render() {
    return (

         <div class="flex-1 px-4 py-2 m-2 border-grey-light">
        <a href="#" class="no-underline text-grey-darkest">
            <div class="rounded overflow-hidden shadow-lg my-2 bg-white">
               <div class="w-full h-64" style={{background:'url(' + this.props.img + ') center top / cover'}}></div>
               <div class="px-6 py-4"><div class="font-bold text-xl mb-2">{this.props.title}</div> <p class="text-grey-darker text-base"><i aria-hidden="true" class="fa fa-map-marker"></i> {this.props.location}</p></div> 
               <div class="px-6 py-4">
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

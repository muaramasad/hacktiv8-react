import React, { Component } from 'react'
import Card from './../components/Card'
import Button from './../components/Button'

export default class SectionHome extends Component {
  render() {
    return (
        <div className={`border-t-2 border-grey-lighter ${this.props.background}`}>
         <div className="container mx-auto py-12 text-center">
            <div className="mb-6">
               <h2 class="font-grey-darker font-sans text-5xl pt-6">{this.props.title}</h2> <p class="text-grey-darker mb-2 font-sans p-4">{this.props.subtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-col md:flex-row xl:flex-row pt-6 pb-6 text-grey-darker">
               {
                  (this.props.type === 'event' ? this.props.data.map((data,index) => {
                     return <Card key={index} img={data.img} title={data.title} location={data.location} genres={data.genres} /> 
                  }) : '')
               }
               {
                  (this.props.type === 'artist' ? this.props.data.map((data,index) => {
                     return <Card key={index} img={data.img} title={data.title} location={data.location} genres={data.genres} /> 
                  }) : '')
               }
            </div>
            {
               (this.props.type === 'event' ? <a href="/events"><Button textBtn={this.props.textBtn}/></a> : <a href="/artists"><Button textBtn={this.props.textBtn}/></a> )
            }
         </div>
        </div>
    )
  }
}

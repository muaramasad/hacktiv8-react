import React, { Component } from 'react';
import _ from 'lodash';
import Navbar from './../components/Navbar';
import Card from './../components/Card';
import FooterLink from './../components/FooterLink';
import Footer from './../components/Footer';

export default class events extends Component {
  constructor(){
    super()
   this.state = {
    dataEvents:[
      {
        title: "SALING RANGKUL Unplagged Show 8",
        img: "http://new.adamusik.id/storage/80/5e97bc36ddea44d4bc1a699024cf1d7f_pamflet.jpeg",
        location: "Banjaran, West Java",
        genres: [
          'rock','pop','metal'
        ]
      },
      {
        title: "Banten Indie Clothing 2018",
        img: "http://new.adamusik.id/storage/78/773c56957de449f992a01581426c63dd_pamflet.jpeg",
        location: "Serang, Banten",
        genres: [
          'rock','pop','metal'
        ]
      }
    ]
   }
  }
  componentDidMount(){
      this._chunkData();
   }
   _chunkData() {
   this.setState({
      dataEvents: _.chunk(this.state.dataEvents, 2)
   });
   }
   _renderEventsCard(){
      let div = [];
      for(let i = 0;i < this.state.dataEvents.length;i++){
         let card = [];
         for(let j = 0;j < this.state.dataEvents[i].length;j++){
            card.push(<Card key={j} img={this.state.dataEvents[i][j].img} title={this.state.dataEvents[i][j].title} location={this.state.dataEvents[i][j].location} genres={this.state.dataEvents[i][j].genres} />);
         } 
         div.push(<div key={i} className="flex flex-col sm:flex-col md:flex-row xl:flex-row text-black">{card}</div>);
      }
      return div;
   }
  render() {
    return (
      <div>
        <header className="w-full font-sans border">
          <Navbar />
        </header>
        <main className="w-full font-sans">
          {/* <SectionHome data={this.state.dataEvents} title="Acara musik terkini" subtitle="Temukan acara musik disekitarmu dan sesuai genre musikmu." background="bg-grey-lighter" type="event" textBtn="Acara Musik Lainnya"/> */}
          <div className="border-t-2 border-grey-lighter bg-grey-lighter">
               <div className="container mx-auto flex flex-col lg:flex-row text-sm leading-normal px-4 md:px-12 pt-6 ">
               <nav className="p-3 rounded font-sans w-full"><ol className="list-reset flex text-grey-dark"><li><a href="http://new.adamusik.id" className="text-orange font-bold no-underline">Home</a></li> <li><span className="mx-2">/</span></li> <li>Acara Musik</li></ol></nav>
               </div>
               <div className="container mx-auto md:pb-12 xl:pb-12">
                  <div className="md:flex flex-wrap justify-center">
                     <div className="w-full md:w-2/3 xl:w-2/3 mt-0 md:mt-0 text-center">
                           {this._renderEventsCard()}
                     </div>
                  </div>
               </div>
            </div>
          <FooterLink />
          <Footer />
        </main>
      </div>
    )
  }
}

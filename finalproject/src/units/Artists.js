import React, { Component } from 'react';
import _ from 'lodash';
import Navbar from './../components/Navbar';
import FooterLink from './../components/FooterLink';
import Footer from './../components/Footer';
import Card from './../components/Card';

export default class artists extends Component {
   constructor(){
   super()
   this.state = {
      dataArtists:[
         {
           title: "Tinky Winky",
           img: "http://new.adamusik.id/storage/72/b52cebda653145ad8e903d8e92f3f2d8_profile.jpeg",
           location: "Depok, West Java",
           genres: [
             'pop punk'
           ]
         },
         {
           title: "Dream Five Line",
           img: "http://new.adamusik.id/storage/43/962dda9ca999475598604d994969fdc3_profile.png",
           location: "Jakarta Pusat, Jakarta",
           genres: [
             'Alternative'
           ]
         },
         {
           title: "MYADVENTURE",
           img: "http://new.adamusik.id/storage/14/100ff80b05944b4480a13dd94765ba94_profile.jpeg",
           location: "Jakarta Selatan, Jakarta",
           genres: [
             'Melodic Punk'
           ]
         },{
            title: "Sunday With Chocolate",
            img: "http://new.adamusik.id/storage/68/088d1e9392cb41189ea8eff8417d33b5_profile.jpeg",
            location: "Jakarta Utara, Jakarta",
            genres: [
              'pop punk'
            ]
          },
          {
            title: "Drop Inside",
            img: "http://new.adamusik.id/storage/44/952a5d6c6d9b44eba6f1f8421d8eb7ed_profile.jpeg",
            location: "Tangerang, Banten",
            genres: [
              'Hardcore'
            ]
          },
          {
            title: "Semiotika",
            img: "http://new.adamusik.id/storage/64/ac6ad95267b648d2a9a659085f7cafbf_profile.jpeg",
            location: "Jambi, Jambi",
            genres: [
              'Rock'
            ]
          },
          {
            title: "Semiotika",
            img: "http://new.adamusik.id/storage/64/ac6ad95267b648d2a9a659085f7cafbf_profile.jpeg",
            location: "Jambi, Jambi",
            genres: [
              'Rock'
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
      dataArtists: _.chunk(this.state.dataArtists, 3)
    });
  }
  _fungsiUpdate(){

  }
  _renderArtistsCard(){
     let div = [];
     for(let i = 0;i < this.state.dataArtists.length;i++){
         let card = [];
         for(let j = 0;j < this.state.dataArtists[i].length;j++){
            card.push(<Card key={j} img={this.state.dataArtists[i][j].img} title={this.state.dataArtists[i][j].title} location={this.state.dataArtists[i][j].location} genres={this.state.dataArtists[i][j].genres} />);
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
            <div className="border-t-2 border-grey-lighter bg-grey-lighter">
               <div className="container mx-auto flex flex-col lg:flex-row text-sm leading-normal px-4 md:px-12 pt-6 ">
               <nav className="p-3 rounded font-sans w-full"><ol className="list-reset flex text-grey-dark"><li><a href="http://new.adamusik.id" className="text-orange font-bold no-underline">Home</a></li> <li><span className="mx-2">/</span></li> <li>Musisi &amp; Band</li></ol></nav>
               </div>
               <div className="container mx-auto md:pb-12 xl:pb-12">
                  <div className="md:flex flex-wrap justify-center">
                     <div className="w-full md:w-2/3 xl:w-2/3 mt-0 md:mt-0 text-center">
                           {this._renderArtistsCard()}
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

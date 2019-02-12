import React, { Component } from 'react';
import _ from 'lodash';
import Navbar from './../components/Navbar';
import Card from './../components/Card';
import FooterLink from './../components/FooterLink';
import Footer from './../components/Footer';

const perChunk = 2

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
          }
       ]
   }
  }
  render() {
    return (
      <div>
        <header className="w-full font-sans border">
          <Navbar />
        </header>
        <main className="w-full font-sans">
            <div class="border-t-2 border-grey-lighter bg-grey-lighter">
               <div class="container mx-auto flex flex-col lg:flex-row text-sm leading-normal px-4 md:px-12 pt-6 ">
               <nav class="p-3 rounded font-sans w-full"><ol class="list-reset flex text-grey-dark"><li><a href="http://new.adamusik.id" class="text-orange font-bold no-underline">Home</a></li> <li><span class="mx-2">/</span></li> <li>Musisi &amp; Band</li></ol></nav>
               </div>
               <div class="container mx-auto md:pb-12 xl:pb-12">
                  <div class="md:flex flex-wrap justify-center">
                     <div class="w-full md:w-2/3 xl:w-2/3 mt-0 md:mt-0 text-center">
                           {
                              this.state.dataArtists.map((data, index) => { 
                                    return <div class="flex flex-col sm:flex-col md:flex-row xl:flex-row text-black"><Card key={index} img={data.img} title={data.title} location={data.location} genres={data.genres} /></div>
                               })
                           }
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

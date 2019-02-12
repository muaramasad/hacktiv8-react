import React, { Component } from 'react';
import Navbar from './../components/Navbar';
import Banner from './../components/Banner';
import SectionHome from './../components/SectionHome';
import BottomBanner from './../components/BottomBanner';
import FooterLink from './../components/FooterLink';
import Footer from './../components/Footer';

export default class home extends Component {
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
    ],
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
          <Banner />
          <SectionHome data={this.state.dataEvents} title="Acara musik terkini" subtitle="Temukan acara musik disekitarmu dan sesuai genre musikmu." background="bg-white" type="event" textBtn="Acara Musik Lainnya"/>
          <SectionHome data={this.state.dataArtists} title="Band & Musisi pilihan" subtitle="Temukan band / musisi pilihan sesuai genre dan lokasi kamu berada." background="bg-grey-lighter" type="artist" textBtn="Band & Musisi Lainnya"/>
          <BottomBanner />
          <FooterLink />
          <Footer />
        </main>
      </div>
    )
  }
}

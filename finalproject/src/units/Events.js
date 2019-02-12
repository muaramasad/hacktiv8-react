import React, { Component } from 'react';
import Navbar from './../components/Navbar';
import Banner from './../components/Banner';
import SectionHome from './../components/SectionHome';
import BottomBanner from './../components/BottomBanner';
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
  render() {
    return (
      <div>
        <header className="w-full font-sans border">
          <Navbar />
        </header>
        <main className="w-full font-sans">
          <SectionHome data={this.state.dataEvents} title="Acara musik terkini" subtitle="Temukan acara musik disekitarmu dan sesuai genre musikmu." background="bg-grey-lighter" type="event" textBtn="Acara Musik Lainnya"/>
          <FooterLink />
          <Footer />
        </main>
      </div>
    )
  }
}

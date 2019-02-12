import React, { Component } from 'react'

export default class BottomBanner extends Component {
  render() {
    return (
      <div className="bg-black w-full"><div className="mx-auto shadow bg-auto bg-bottom pt-16 pb-16" style={{background:'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) 0% 0% / cover, url("http://new.adamusik.id/assets/images/bottom_bg.jpg") center center'}}><div className="text-center text-white pb-32 pt-32"><h1 className="font-sans font-bold text-5xl">Wujudkan acara musikmu.</h1> <h2 className="font-thin text-sm tracking-wide mt-2 mb-4 text-lg">Kolaborasi bersama musisi, band, event organizer dan selenggarakan acara musikmu.</h2> <a href="#"><button type="submit" className="appearance-none bg-orange-dark text-white text-base font-semibold tracking-wide uppercase p-4 rounded shadow hover:bg-orange-dark">Daftar sekarang</button></a></div></div></div>
    )
  }
}

import React, { Component } from 'react'

const bgImg = {
   backgroundImage: 'url(http://new.adamusik.id/assets/img/backgrounds/head-bg.jpg)'
}


export default class Banner extends Component {
  render() {
    return (
        <div className="bg-grey-darkest w-full"><div className="mx-auto shadow bg-auto bg-bottom pt-32 pb-32" style={bgImg}><div className="text-center text-white pb-32 pt-32"><h1 className="font-sans font-bold text-5xl">Temukan acara musik, musisi, dan band.</h1> <h2 className="font-thin text-sm tracking-wide mt-2 mb-4 text-lg">Jelajahi acara musik, band, musisi dan dapatkan kesempatan ikut serta dalam acara musik dimanapun sesuai genre musikmu</h2> <div className="w-full text-center pl-4 pr-4"></div></div></div></div>
    )
  }
}

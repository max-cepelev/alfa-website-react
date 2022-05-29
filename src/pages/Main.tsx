import React from 'react'
import About from '../blocks/About'
import Progress from '../blocks/Progress'
import Standarts from '../blocks/Standarts'
import Header from '../blocks/Header'
import Options from '../blocks/Options'
import News from '../blocks/News'
import Footer from '../blocks/Footer'

export default function Main() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Options />
        <About />
        <Progress />
        <Standarts />
        <News />
        <Footer />
      </main>
    </div>
  )
}

import React from 'react'
import About from '../blocks/main/About'
import Progress from '../blocks/main/Progress'
import Standarts from '../blocks/common/Standarts'
import Header from '../blocks/Header'
import Options from '../blocks/common/Options'
import News from '../blocks/main/News'
import Footer from '../blocks/Footer'
import Projects from '../blocks/common/Projects'

export default function MainPage() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Projects />
        <Options />
        <About />
        <Progress />
        <Standarts />
        <News />
      </main>
      <Footer />
    </div>
  )
}

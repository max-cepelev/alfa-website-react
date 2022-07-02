import React from 'react'
import Header from '../blocks/Header'
import Footer from '../blocks/Footer'
import About from '../blocks/new-home/About'
import Info from '../blocks/new-home/Info'
import Features from '../blocks/new-home/Features'
import Infrastructure from '../blocks/new-home/Infrastructure'
import Standarts from '../blocks/common/Standarts'
import Layout from '../blocks/new-home/Layout'
import Options from '../blocks/common/Options'
import Stage from '../blocks/new-home/Stage'

export default function NewHomePage() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <nav className="breadcrumbs">
          <div className="breadcrumbs__container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="#" className="breadcrumbs__link">
                  Главная
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a href="#" className="breadcrumbs__link">
                  Новостройки
                </a>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__current">Дом Скворцы</span>
              </li>
            </ul>
          </div>
        </nav>
        <About />
        <Info />
        <Features />
        <Infrastructure />
        <Standarts />
        <Layout />
        <Options />
        <Stage />
      </main>
      <Footer />
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import BoilerRoom from '../blocks/communications/BoilerRoom'
import Canalization from '../blocks/communications/Canalization'
import CommunicationsNav from '../blocks/communications/CommunicationsNav'
import HeatingUponor from '../blocks/communications/HeatingUponor'
import Lift from '../blocks/communications/Lift'
import Radiators from '../blocks/communications/Radiators'
import Soundproofing from '../blocks/communications/Soundproofing'
import Water from '../blocks/communications/Water'
import Footer from '../blocks/Footer'
import Header from '../blocks/Header'

export default function CommunicationsPage() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <nav className="breadcrumbs">
          <div className="breadcrumbs__container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to="/" className="breadcrumbs__link">
                  Главная
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="/standarts" className="breadcrumbs__link">
                  Стандарты
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__current">
                  Инженерные коммуникации
                </span>
              </li>
            </ul>
          </div>
        </nav>
        <CommunicationsNav />
        <Soundproofing />
        <Water />
        <BoilerRoom />
        <Lift />
        <HeatingUponor />
        <Radiators />
        <Canalization />
        <img
          width="100%"
          className="communications__image"
          src="/img/Communications/man.png"
          alt=""
        />
      </main>
      <Footer />
    </div>
  )
}

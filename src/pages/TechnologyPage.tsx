import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../blocks/Footer'
import Header from '../blocks/Header'
import Bathroom from '../blocks/technology/Bathroom'
import Facades from '../blocks/technology/Facades'
import Flooring from '../blocks/technology/Flooring'
import Renovation from '../blocks/technology/Renovation'
import TechnologyNav from '../blocks/technology/TechnologyNav'
import Walls from '../blocks/technology/Walls'
import Window from '../blocks/technology/Window'

export default function TechnologyPage() {
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
                  Технологии строительства
                </span>
              </li>
            </ul>
          </div>
        </nav>
        <TechnologyNav />
        <Facades />
        <Walls />
        <Flooring />
        <Window />
        <Renovation />
        <Bathroom />
      </main>
      <Footer />
    </div>
  )
}

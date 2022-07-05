import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../blocks/Footer'
import Header from '../blocks/Header'
import HouseTerritory from '../blocks/house-territory/HouseTerritory'

export default function HouseTerritoryPage() {
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
                  Придомовая территория
                </span>
              </li>
            </ul>
          </div>
        </nav>
        <HouseTerritory />
      </main>
      <Footer />
    </div>
  )
}

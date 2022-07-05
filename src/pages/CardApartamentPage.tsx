import React from 'react'
import { Link } from 'react-router-dom'
import Apartaments from '../blocks/card-apartament/Apartaments'
import ApartamentsSlider from '../blocks/card-apartament/ApartamentsSlider'
import Footer from '../blocks/Footer'
import Header from '../blocks/Header'

export default function CardApartamentPage() {
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
                <Link to="/catalog" className="breadcrumbs__link">
                  Каталог
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="/" className="breadcrumbs__current">
                  Квартиры
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Apartaments />
        <ApartamentsSlider />
      </main>
      <Footer />
    </div>
  )
}

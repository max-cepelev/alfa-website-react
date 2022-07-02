import React from 'react'
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
                <a href="#" className="breadcrumbs__link">
                  Главная
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a href="#" className="breadcrumbs__link">
                  Каталог
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a href="#" className="breadcrumbs__current">
                  Квартиры
                </a>
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

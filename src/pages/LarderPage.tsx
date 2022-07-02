import React from 'react'
import Footer from '../blocks/Footer'
import Header from '../blocks/Header'
import Larder from '../blocks/larder/Larder'

export default function LarderPage() {
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
                <span className="breadcrumbs__current">Кладовые</span>
              </li>
            </ul>
          </div>
        </nav>
        <Larder />
      </main>
      <Footer />
    </div>
  )
}

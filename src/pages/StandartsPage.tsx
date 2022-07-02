import React from 'react'
import Standarts from '../blocks/common/Standarts'
import Footer from '../blocks/Footer'
import Header from '../blocks/Header'

export default function StandartsPage() {
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
                <span className="breadcrumbs__current">Стандарты</span>
              </li>
            </ul>
          </div>
        </nav>
        <Standarts />
      </main>
      <Footer />
    </div>
  )
}

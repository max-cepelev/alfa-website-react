import React from 'react'
import { Link } from 'react-router-dom'
import Article from '../blocks/Article'
import Footer from '../blocks/Footer'
import Header from '../blocks/Header'

export default function ArticlePage() {
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
                <Link to="/news" className="breadcrumbs__link">
                  Новости
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__current">
                  Субсидированная ипотека на квартиры в доме "Скворцы"
                </span>
              </li>
            </ul>
          </div>
        </nav>
        <Article />
      </main>
      <Footer />
    </div>
  )
}

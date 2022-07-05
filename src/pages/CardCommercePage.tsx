import React from 'react'
import { Link } from 'react-router-dom'
import CardCommerce from '../blocks/card-commerce/CardCommerce'
import Footer from '../blocks/Footer'
import Header from '../blocks/Header'

export default function CardCommercePage() {
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
                <a href="#" className="breadcrumbs__link">
                  Коммерция
                </a>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__current">Помещение №2</span>
              </li>
            </ul>
          </div>
        </nav>
        <CardCommerce />
      </main>
      <Footer />
    </div>
  )
}

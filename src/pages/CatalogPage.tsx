import React from 'react'
import { Link } from 'react-router-dom'
import Catalog from '../blocks/catalog/Catalog'
import Footer from '../blocks/Footer'
import Header from '../blocks/Header'

export default function CatalogPage() {
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
                <span className="breadcrumbs__current">Каталог</span>
              </li>
            </ul>
          </div>
        </nav>
        <Catalog />
      </main>
      <Footer />
    </div>
  )
}

import React from 'react'
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
                <a href="#" className="breadcrumbs__link">
                  Главная
                </a>
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

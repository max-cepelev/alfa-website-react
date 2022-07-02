import React from 'react'
import Table from '../blocks/common/Table'
import Footer from '../blocks/Footer'
import Header from '../blocks/Header'

export default function CatalogApartamentsPage() {
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
        <Table />
      </main>
      <Footer />
    </div>
  )
}

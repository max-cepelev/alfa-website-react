import React from 'react'
import CommonAreas from '../blocks/common-areas/CommonAreas'
import Footer from '../blocks/Footer'
import Header from '../blocks/Header'

export default function CommonAreasPage() {
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
                  Стандарты
                </a>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__current">
                  Места общего пользования
                </span>
              </li>
            </ul>
          </div>
        </nav>
        <CommonAreas />
      </main>
      <Footer />
    </div>
  )
}

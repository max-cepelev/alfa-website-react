import React from 'react'
import ClientNav from '../blocks/client/ClientNav'
import Guarantee from '../blocks/client/Guarantee'
import Reception from '../blocks/client/Reception'
import Footer from '../blocks/Footer'
import Header from '../blocks/Header'

export default function ClientPage() {
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
                <span className="breadcrumbs__current">Покупателям</span>
              </li>
            </ul>
          </div>
        </nav>
        <ClientNav />
        <Reception />
        <Guarantee />
      </main>
      <Footer />
    </div>
  )
}

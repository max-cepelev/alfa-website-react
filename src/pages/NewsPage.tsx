import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../blocks/Footer'
import Header from '../blocks/Header'
import News from '../blocks/news/News'

export default function NewsPage() {
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
                <span className="breadcrumbs__current">Новости</span>
              </li>
            </ul>
          </div>
        </nav>
        <News />
      </main>
      <Footer />
    </div>
  )
}

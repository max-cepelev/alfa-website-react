import React from 'react'
import Footer from '../blocks/Footer'
import Header from '../blocks/Header'
import Calc from '../blocks/options/Calc'
import GoodBuy from '../blocks/options/GoodBuy'
import Hypothec from '../blocks/options/Hypothec'
import Installment from '../blocks/options/Installment'
import MatCapital from '../blocks/options/MatCapital'
import OptionsNav from '../blocks/options/OptionsNav'
import Subsidies from '../blocks/options/Subsidies'
import TradeIn from '../blocks/options/TradeIn'
import Useful from '../blocks/options/Useful'

export default function OptionsPage() {
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
                <span className="breadcrumbs__current">
                  Способы приобретения
                </span>
              </li>
            </ul>
          </div>
        </nav>
        <OptionsNav />
        <Hypothec />
        <GoodBuy />
        <Calc />
        <MatCapital />
        <TradeIn />
        <Installment />
        <Subsidies />
        <Useful />
      </main>
      <Footer />
    </div>
  )
}

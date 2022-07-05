import React from 'react'
import { Link } from 'react-router-dom'

export default function News() {
  return (
    <section className="news">
      <div className="news__container">
        <div className="news__body">
          <div className="news__top">
            <div className="news__title title">
              Новости <span>компании</span>
            </div>
            <Link to="/news" className="news__link">
              <span>Посмотреть</span> все новости
            </Link>
          </div>
          <div className="news__items">
            <a href="#" className="news__item item blue">
              <div className="news__subtitle">
                Акция "Все в гнездо!" для покупателей дома Скворцы
              </div>
              <div className="news__data">21.04.2022</div>
            </a>
            <Link to="/article" className="news__item item orange">
              <div className="news__subtitle">
                Субсидированная ипотека на квартиры в доме "Скворцы"
              </div>
              <div className="news__data">22.02.2022</div>
            </Link>
            <a href="#" className="news__item item white">
              <div className="news__subtitle">
                Акция декабря на таунхаусы в Дзержинском районе
              </div>
              <div className="news__data">17.12.2021</div>
            </a>
            <a href="#" className="news__item item black">
              <div className="news__subtitle">
                Получено Разрешение на строительство дома на Клары Цеткин, 35
              </div>
              <div className="news__data">15.11.2021</div>
            </a>
          </div>
          <div className="news__pagination pagination">
            <span></span>
            <span></span>
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  )
}

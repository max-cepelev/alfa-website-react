import React from 'react'
import { Link } from 'react-router-dom'
import ButtonMore from '../../components/ButtonMore'

export default function News() {
  return (
    <section className="page-news">
      <div className="page-news__container">
        <div className="page-news__body">
          <div className="page-news__title title">Новости</div>
          <div className="page-news__items">
            <a href="#" className="page-news__item item blue">
              <div className="page-news__text">
                Акция "Все в гнездо!" для покупателей дома Скворцы
              </div>
              <div className="page-news__data">21.04.2022</div>
            </a>
            <Link to="/article" className="page-news__item item orange">
              <div className="page-news__text">
                Субсидированная ипотека на квартиры в доме "Скворцы"
              </div>
              <div className="page-news__data">22.02.2022</div>
            </Link>
            <a href="#" className="page-news__item item grey">
              <div className="page-news__text">
                Акция декабря на таунхаусы в Дзержинском районе
              </div>
              <div className="page-news__data">17.12.2021</div>
            </a>
            <a href="#" className="page-news__item item black">
              <div className="page-news__text">
                Получено Разрешение на строительство дома на Клары Цеткин, 35
              </div>
              <div className="page-news__data">15.11.2021</div>
            </a>
            <a href="#" className="page-news__item item black">
              <div className="page-news__text">
                Акция "Все в гнездо!" для покупателей дома Скворцы
              </div>
              <div className="page-news__data">21.04.2022</div>
            </a>
            <a href="#" className="page-news__item item grey">
              <div className="page-news__text">
                Субсидированная ипотека на квартиры в доме "Скворцы"
              </div>
              <div className="page-news__data">22.02.2022</div>
            </a>
            <a href="#" className="page-news__item item orange">
              <div className="page-news__text">
                Акция декабря на таунхаусы в Дзержинском районе
              </div>
              <div className="page-news__data">17.12.2021</div>
            </a>
            <a href="#" className="page-news__item item blue">
              <div className="page-news__text">
                Получено Разрешение на строительство дома на Клары Цеткин, 35
              </div>
              <div className="page-news__data">15.11.2021</div>
            </a>
          </div>
          <ButtonMore title="Посмотреть еще новости" />
        </div>
      </div>
    </section>
  )
}

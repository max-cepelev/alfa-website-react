import React from 'react'

export default function News() {
  return (
    <section className="page__news news-block block">
      <div className="news-block__container">
        <div className="news-block__body">
          <div className="news-block__top">
            <div className="news-block__title title">
              Новости <span>компании</span>
            </div>
            <a href="#" className="news-block__link">
              <span>Посмотреть</span> все новости
            </a>
          </div>
          <div className="news-block__slider">
            <div className="news-block__wrapper">
              <a href="#" className="news-block__slide item">
                <img
                  src="/img/news/01.png"
                  alt=""
                  className="news-block__image"
                />
                <div className="news-block__text blue">
                  <div className="news-block__subtitle">
                    Акция "Все в гнездо!" для покупателей дома Скворцы
                  </div>
                  <div className="news-block__data">21.04.2022</div>
                </div>
              </a>
              <a href="#" className="news-block__slide item">
                <img
                  src="/img/news/02.png"
                  alt=""
                  className="news-block__image"
                />
                <div className="news-block__text orange">
                  <div className="news-block__subtitle">
                    Субсидированная ипотека на квартиры в доме "Скворцы"
                  </div>
                  <div className="news-block__data">22.02.2022</div>
                </div>
              </a>
              <a href="#" className="news-block__slide item">
                <img
                  src="/img/news/03.png"
                  alt=""
                  className="news-block__image"
                />
                <div className="news-block__text white">
                  <div className="news-block__subtitle">
                    Акция декабря на таунхаусы в Дзержинском районе
                  </div>
                  <div className="news-block__data">17.12.2021</div>
                </div>
              </a>
              <a href="#" className="news-block__slide item">
                <img
                  src="/img/news/04.png"
                  alt=""
                  className="news-block__image"
                />
                <div className="news-block__text black">
                  <div className="news-block__subtitle">
                    Получено Разрешение на строительство дома на Клары Цеткин,
                    35
                  </div>
                  <div className="news-block__data">15.11.2021</div>
                </div>
              </a>
            </div>
          </div>
          <div className="news-block__pagination"></div>
        </div>
      </div>
    </section>
  )
}

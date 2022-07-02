import React from 'react'

export default function Layout() {
  return (
    <section className="layout-home">
      <div className="layout-home__container">
        <div className="layout-home__title title">Планировки</div>
        <div className="layout-home__plan plan-home">
          <div className="plan-home__top">
            <div className="plan-home__text text">
              Наведите мышкой на план этажа, вы узнаете параметры квартиры и
              сможете перейти в карточку квартиры.
            </div>
            <div className="plan-home__entrances">
              <div className="plan-home__entrance tabs active">1 подъезд</div>
              <div className="plan-home__entrance tabs">2 подъезд</div>
              <div className="plan-home__entrance tabs">3 подъезд</div>
            </div>
          </div>
          <div className="plan-home__floor">
            <div className="plan-home__numb-floor">
              <div className="plan-home__arrow-prev arrow _icon-arrow"></div>
              <div className="plan-home__numb">
                <span className="plan-home__value">8</span>
                <span className="plan-home__size">этаж</span>
              </div>
              <div className="plan-home__arrow-next arrow _icon-arrow"></div>
            </div>
            <div className="plan-home__media">
              <div className="plan-home__hover plan-hover">
                <div className="plan-hover__title">квартира №6</div>
                <span>39,5 м2</span>
                <span>комнат - 2</span>
                <span>4 384 500 ₽</span>
                <span>В продаже-10</span>
                <span>Свободна</span>
              </div>
              <a
                href="#layout-mobile"
                className="plan-home__hover-background"
              ></a>
              <img src="/img/plan-floor/shema.svg" alt="" />
            </div>
          </div>
          <div className="plan-home__image">
            <span>1 подъезд</span>
            <img src="/img/plan-floor/home.png" alt="" />
          </div>
        </div>
        <div className="layout-home__objects objects-home">
          <div className="objects-home__items">
            <a href="#" className="objects-home__item item blue">
              <div className="objects-home__title _icon-arrow">кладовые</div>
              <img
                className="objects-home__image"
                src="/img/home-objects/01.png"
                alt=""
              />
            </a>
            <a href="#" className="objects-home__item item orange">
              <div className="objects-home__title _icon-arrow">машиноместа</div>
              <img
                className="objects-home__image"
                src="/img/home-objects/02.png"
                alt=""
              />
            </a>
            <a href="#" className="objects-home__item item black">
              <div className="objects-home__title _icon-arrow">коммерция</div>
              <img
                className="objects-home__image"
                src="/img/home-objects/03.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div id="layout-mobile" className="layout-home__mobile layout-mobile">
        <div className="layout-mobile__body">
          <a
            href="#plan-home__floor"
            className="layout-mobile__title _icon-close1"
          >
            квартира №6
          </a>
          <img src="/img/plan-floor/mobile.jpg" alt="" />
          <div className="layout-mobile__info border">
            <span>
              <b>подъезд</b> - 1
            </span>
            <span>
              <b>комнат</b> - 2
            </span>
            <span>
              <b>этаж</b> - 8
            </span>
            <span>
              <b>в продаже</b> - 10
            </span>
            <span>
              <b>площадь</b> - 39,5 м2
            </span>
            <span>
              <b>статус</b> - свободна
            </span>
          </div>
          <div className="layout-mobile__price">
            4 384 500 ₽ <a href="#">в ипотеку от 11 820 ₽/мес </a>
          </div>
          <div className="layout-mobile__button btn-orange">
            Перейти в карточку квартиры
          </div>
        </div>
      </div>
    </section>
  )
}

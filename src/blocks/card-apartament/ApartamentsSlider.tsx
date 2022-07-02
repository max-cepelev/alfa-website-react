import React from 'react'

export default function ApartamentsSlider() {
  return (
    <section className="apartaments-slider">
      <div className="apartaments-slider__container">
        <div className="apartaments-slider__title title">Похожие квартиры</div>
        <div className="apartaments-slider__items">
          <a href="#" className="apartaments-slider__item item">
            <img
              className="apartaments-slider__image"
              src="/img/card-apartament/slider.png"
              alt=""
            />
            <div className="apartaments-slider__content">
              <div className="apartaments-slider__subtitle">
                1-комнатная 36.5 м2
              </div>
              <div className="apartaments-slider__info">
                <span className="_icon-house">Дом Гавань</span>
                <span className="_icon-map">ул. Подводников, 112</span>
              </div>
              <div className="apartaments-slider__price">2 500 000 ₽ </div>
            </div>
          </a>
          <a href="#" className="apartaments-slider__item item">
            <img
              className="apartaments-slider__image"
              src="/img/card-apartament/slider.png"
              alt=""
            />
            <div className="apartaments-slider__content">
              <div className="apartaments-slider__subtitle">
                1-комнатная 36.5 м2
              </div>
              <div className="apartaments-slider__info">
                <span className="_icon-house">Дом Гавань</span>
                <span className="_icon-map">ул. Подводников, 112</span>
              </div>
              <div className="apartaments-slider__price">2 500 000 ₽ </div>
            </div>
          </a>
          <a href="#" className="apartaments-slider__item item">
            <img
              className="apartaments-slider__image"
              src="/img/card-apartament/slider.png"
              alt=""
            />
            <div className="apartaments-slider__content">
              <div className="apartaments-slider__subtitle">
                1-комнатная 36.5 м2
              </div>
              <div className="apartaments-slider__info">
                <span className="_icon-house">Дом Гавань</span>
                <span className="_icon-map">ул. Подводников, 112</span>
              </div>
              <div className="apartaments-slider__price">2 500 000 ₽ </div>
            </div>
          </a>
          <a href="#" className="apartaments-slider__item item">
            <img
              className="apartaments-slider__image"
              src="/img/card-apartament/slider.png"
              alt=""
            />
            <div className="apartaments-slider__content">
              <div className="apartaments-slider__subtitle">
                1-комнатная 36.5 м2
              </div>
              <div className="apartaments-slider__info">
                <span className="_icon-house">Дом Гавань</span>
                <span className="_icon-map">ул. Подводников, 112</span>
              </div>
              <div className="apartaments-slider__price">2 500 000 ₽ </div>
            </div>
          </a>
        </div>
        <div className="apartaments-slider__control-slider">
          <div className="apartaments-slider__pagination pagination">
            <span></span>
            <span></span>
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
          <div className="apartaments-slider__arrows">
            <div className="apartaments-slider__arrow-prev arrow _icon-arrow"></div>
            <div className="apartaments-slider__arrow-next arrow _icon-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

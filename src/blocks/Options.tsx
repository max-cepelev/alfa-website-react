import React from 'react'

export default function Options() {
  return (
    <section className="page__options options-block">
      <div className="options-block__container">
        <div className="options-block__body">
          <div className="options-block__content options-content">
            <div className="options-content__title title">
              <span>способы</span> <span>приобретения</span>
            </div>
            <div className="options-content__subtitle">
              ипотека по ставке <span>от 4,5%</span>
            </div>
            <div className="options-content__text text">
              Ипотека для семей с детьми по государственной программе льготного
              финансирования ипотеки
            </div>
            <div className="options-content__buttons">
              <a href="#" className="options-content__button btn-orange">
                Подробнее
              </a>
              <a href="#" className="options-content__button btn">
                Калькулятор
              </a>
            </div>
          </div>
          <div className="options-block__items options-items">
            <a href="#" className="options-items__item item">
              <img
                className="options-items__image"
                src="/img/options/01.png"
                alt=""
              />
              <div className="options-items__text blue">
                <div className="options-items__title _icon-arrow">
                  маткапитал
                </div>
                <div className="options-items__subtitle text">
                  Поможем реализовать материнский капитал
                </div>
              </div>
            </a>
            <a href="#" className="options-items__item item">
              <img
                className="options-items__image"
                src="/img/options/02.png"
                alt=""
              />
              <div className="options-items__text orange">
                <div className="options-items__title _icon-arrow">trade-in</div>
                <div className="options-items__subtitle text">
                  Обменяем ваше старое жилье на квартиру в новостройке
                </div>
              </div>
            </a>
            <a href="#" className="options-items__item item">
              <img
                className="options-items__image"
                src="/img/options/03.png"
                alt=""
              />
              <div className="options-items__text white">
                <div className="options-items__title _icon-arrow">субсидии</div>
                <div className="options-items__subtitle text">
                  Реализуем различные сертификаты и субсидии
                </div>
              </div>
            </a>
            <a href="#" className="options-items__item item">
              <img
                className="options-items__image"
                src="/img/options/04.png"
                alt=""
              />
              <div className="options-items__text blue">
                <div className="options-items__title _icon-arrow">
                  рассрочка
                </div>
                <div className="options-items__subtitle text">
                  Дадим без процентную рассрочку до конца строительства
                </div>
              </div>
            </a>
          </div>
          <img
            className="options-block__image"
            src="/img/options/background.png"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

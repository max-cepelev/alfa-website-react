import React from 'react'

export default function Hypothec() {
  return (
    <section className="hypothec">
      <div className="hypothec__container">
        <div className="hypothec__top">
          <div className="hypothec__content">
            <div className="hypothec__title title">Ипотека</div>
            <div className="hypothec__text text">
              Большинство новоселов предпочитают покупать жилье с помощью
              ипотечного кредита. Дома ГК Альфа аккредитованы в 16 надежных
              банках, где первоначальный взнос от 10%, а срок кредитования
              доходит до 30 лет.
              <br />
              <br />
              Наши ипотечные консультанты помогут разобраться в многостраничных
              банковских анкетах и юридических тонкостях.
            </div>
            <a href="#" className="hypothec__button btn-orange">
              Хочу обсудить ипотеку
            </a>
          </div>
          <img
            className="hypothec__image"
            src="/img/options-page/hypothec.png"
            alt=""
          />
        </div>
        <div className="hypothec__subtitle">А еще мы:</div>
        <div className="hypothec__items hypothec-items">
          <div className="hypothec-items__item blue">
            <img
              className="hypothec-items__image"
              src="/img/options-page/we/01.jpg"
              alt=""
            />
            <div className="hypothec-items__text">
              Найдем самое выгодное предложение на ипотечном рынке
            </div>
          </div>
          <div className="hypothec-items__item orange">
            <img
              className="hypothec-items__image"
              src="/img/options-page/we/02.jpg"
              alt=""
            />
            <div className="hypothec-items__text">
              Сами отправим заявку в банки
            </div>
          </div>
          <div className="hypothec-items__item white">
            <img
              className="hypothec-items__image"
              src="/img/options-page/we/03.webp"
              alt=""
            />
            <div className="hypothec-items__text">
              Не попросим лишних данных и не допустим утечки
            </div>
          </div>
          <div className="hypothec-items__item black">
            <img
              className="hypothec-items__image"
              src="/img/options-page/we/04.jpeg"
              alt=""
            />
            <div className="hypothec-items__text">
              Будем рядом на каждом этапе оформления займа
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

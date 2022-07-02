import React from 'react'

export default function CardCommerce() {
  return (
    <section className="commerce-card">
      <div className="commerce-card__container">
        <div className="commerce-card__top">
          <div className="commerce-card__title">помещение 200 м2</div>
          <div className="commerce-card__send _icon-send">
            <span>Поделиться</span>
          </div>
        </div>
        <div className="commerce-card__body">
          <div className="commerce-card__media commerce-media">
            <div className="commerce-media__tabs">
              <a href="#image-1" className="commerce-media__tab active tabs">
                Планировка
              </a>
              <a href="#image-2" className="commerce-media__tab tabs">
                План этажа
              </a>
              <a href="#image-3" className="commerce-media__tab tabs">
                План дома
              </a>
            </div>
            <div className="commerce-media__images">
              <img
                id="image-1"
                className="commerce-media__image"
                src="/img/commerce/01.png"
                alt=""
              />
              <img
                id="image-2"
                className="commerce-media__image"
                src="/img/commerce/02.png"
                alt=""
              />
              <img
                id="image-3"
                className="commerce-media__image"
                src="/img/commerce/03.png"
                alt=""
              />
            </div>
          </div>
          <div className="commerce-card__info commerce-info">
            <div className="commerce-info__items">
              <div className="commerce-info__item-big border">
                <div className="commerce-info__column">
                  <div className="commerce-info__title">Жилой комплекс</div>
                  <div className="commerce-info__subtitle _icon-house">
                    Дом Скворцы
                  </div>
                  <div className="commerce-info__subtitle _icon-map">
                    ул. Подводников, 112
                  </div>
                </div>
                <div className="commerce-info__column">
                  <div className="commerce-info__title">Срок сдачи</div>
                  <div className="commerce-info__subtitle">II кв, 2022</div>
                </div>
              </div>
              <div className="commerce-info__item border">
                <div className="commerce-info__title">Помещение</div>
                <div className="commerce-info__subtitle">№ 2</div>
              </div>
              <div className="commerce-info__item border">
                <div className="commerce-info__title">Этаж</div>
                <div className="commerce-info__subtitle">1</div>
              </div>
              <div className="commerce-info__item border">
                <div className="commerce-info__title">Цена за м2</div>
                <div className="commerce-info__subtitle">15 000 ₽/м2</div>
              </div>
              <div className="commerce-info__item border">
                <div className="commerce-info__title">Статус</div>
                <div className="commerce-info__subtitle">Свободно</div>
              </div>
            </div>
            <div className="commerce-info__price border">
              <div className="commerce-info__title">Стоимость помещения</div>
              <div className="commerce-info__value">2 500 000 ₽</div>
              <div className="commerce-info__credit">
                в ипотеку от 11 820 ₽/мес
              </div>
              <button className="commerce-info__button btn-orange">
                Получить консультацию
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

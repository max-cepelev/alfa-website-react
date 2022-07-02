import React from 'react'

export default function Larder() {
  return (
    <section id="larder" className="larder">
      <div className="larder__container">
        <div className="larder__title title">Выбрать кладовую</div>
        <div className="larder__filter">
          <div className="larder__subtitle">
            <span>*</span>Для отображения плана выберете жилой комплекс
          </div>
        </div>
        <div className="larder__tabs">
          <div className="larder__tab tabs active">1 подъезд</div>
          <div className="larder__tab tabs">2 подъезд</div>
          <div className="larder__tab tabs">3 подъезд</div>
        </div>
        <div className="larder__image">
          <img src="/img/catalog/larder.png" alt="" />
          <a href="#larder-mobile"></a>
        </div>
      </div>
      <div id="larder-mobile" className="larder__mobile larder-mobile">
        <div className="larder-mobile__body">
          <a href="#larder" className="larder-mobile__name _icon-close1">
            кладовая 4,9 м2
          </a>
          <div className="larder-mobile__items">
            <div className="larder-mobile__item-big border">
              <div className="larder-mobile__column">
                <div className="larder-mobile__title">Жилой комплекс</div>
                <div className="larder-mobile__subtitle _icon-house">
                  Дом Скворцы
                </div>
                <div className="larder-mobile__subtitle _icon-map">
                  ул. Подводников, 112
                </div>
              </div>
              <div className="larder-mobile__column">
                <div className="larder-mobile__title">Срок сдачи</div>
                <div className="larder-mobile__subtitle">II кв, 2022</div>
              </div>
            </div>
            <div className="larder-mobile__item border">
              <div className="larder-mobile__title">Кладовая</div>
              <div className="larder-mobile__subtitle">№ 3</div>
            </div>
            <div className="larder-mobile__item border">
              <div className="larder-mobile__title">Этаж</div>
              <div className="larder-mobile__subtitle">Парковка</div>
            </div>
            <div className="larder-mobile__item border">
              <div className="larder-mobile__title">Цена за м2</div>
              <div className="larder-mobile__subtitle">15 000 ₽/м2</div>
            </div>
            <div className="larder-mobile__item border">
              <div className="larder-mobile__title">Статус</div>
              <div className="larder-mobile__subtitle">Свободно</div>
            </div>
          </div>
          <div className="larder-mobile__price border">
            <div className="larder-mobile__title">Стоимость кладовой</div>
            <div className="larder-mobile__value">450 500 ₽</div>
            <div className="larder-mobile__credit">
              в ипотеку от 11 820 ₽/мес
            </div>
            <button className="larder-mobile__button btn-orange">
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

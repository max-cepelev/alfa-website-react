import React from 'react'

export default function Parking() {
  return (
    <section id="parking" className="parking">
      <div className="parking__container">
        <div className="parking__title title">Выбрать машиноместо</div>
        <div className="parking__filter">
          <div className="parking__subtitle">
            <span>*</span>Для отображения плана выберете жилой комплекс
          </div>
        </div>
        <div className="parking__image">
          <img src="/img/catalog/parking.png" alt="" />
          <a href="#parking-mobile"></a>
          <div className="parking__info parking-info">
            <div className="parking-info__title">машиноместо №3</div>
            <p>13,5 м2</p>
            <p>450 500 ₽</p>
            <p>Свободно</p>
          </div>
        </div>
      </div>
      <div id="parking-mobile" className="parking__mobile parking-mobile">
        <div className="parking-mobile__body">
          <a href="#parking" className="parking-mobile__name _icon-close1">
            Машиноместо 13,5 м2
          </a>
          <div className="parking-mobile__items">
            <div className="parking-mobile__item-big border">
              <div className="parking-mobile__column">
                <div className="parking-mobile__title">Жилой комплекс</div>
                <div className="parking-mobile__subtitle _icon-house">
                  Дом Скворцы
                </div>
                <div className="parking-mobile__subtitle _icon-map">
                  ул. Подводников, 112
                </div>
              </div>
              <div className="parking-mobile__column">
                <div className="parking-mobile__title">Срок сдачи</div>
                <div className="parking-mobile__subtitle">II кв, 2022</div>
              </div>
            </div>
            <div className="parking-mobile__item border">
              <div className="parking-mobile__title">Машиноместо</div>
              <div className="parking-mobile__subtitle">№ 3</div>
            </div>
            <div className="parking-mobile__item border">
              <div className="parking-mobile__title">Этаж</div>
              <div className="parking-mobile__subtitle">Парковка</div>
            </div>
            <div className="parking-mobile__item border">
              <div className="parking-mobile__title">Цена за м2</div>
              <div className="parking-mobile__subtitle">15 000 ₽/м2</div>
            </div>
            <div className="parking-mobile__item border">
              <div className="parking-mobile__title">Статус</div>
              <div className="parking-mobile__subtitle">Свободно</div>
            </div>
          </div>
          <div className="parking-mobile__price border">
            <div className="parking-mobile__title">Стоимость машиноместа</div>
            <div className="parking-mobile__value">450 500 ₽</div>
            <div className="parking-mobile__credit">
              в ипотеку от 11 820 ₽/мес
            </div>
            <button className="parking-mobile__button btn-orange">
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

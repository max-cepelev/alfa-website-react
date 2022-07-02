import React from 'react'

export default function Renovation() {
  return (
    <section id="renovation" className="renovation">
      <div className="renovation__container">
        <div className="renovation__title title">Отделка квартир</div>
        <div className="renovation__text text">
          Квартиры в наших домах сдаются в белой отделке. Коммуникации подведены
          и скрыты, системв отопления смонтирована, на полу лежит ровная стяжка,
          стены выровнены и оштукатурены, новоселам остается сделать финишную
          отделку по своему дизайн-проекту.
        </div>
        <div className="renovation__items">
          <div className="renovation__item">
            <img src="/img/Technology/renovation/01.jpg" alt="" />
            <div className="renovation__subtitle blue">
              ПВХ или алюминиевый профиль с поворотно-откидными створками
            </div>
          </div>
          <div className="renovation__item">
            <img src="/img/Technology/renovation/02.jpeg" alt="" />
            <div className="renovation__subtitle orange">
              Оконные откосы закрыты ПВХ-панелями
            </div>
          </div>
          <div className="renovation__item">
            <img src="/img/Technology/renovation/03.jpg" alt="" />
            <div className="renovation__subtitle grey">
              Оконные конструкции и подоконники
            </div>
          </div>
          <div className="renovation__item">
            <img src="/img/Technology/renovation/04.jpg" alt="" />
            <div className="renovation__subtitle black">
              металлическая входная дверь
            </div>
          </div>
          <div className="renovation__item">
            <img src="/img/Technology/renovation/05.jpeg" alt="" />
            <div className="renovation__subtitle blue">
              Стены выровнены и оштукатурены
            </div>
          </div>
          <div className="renovation__item">
            <img src="/img/Technology/renovation/06.jpeg" alt="" />
            <div className="renovation__subtitle orange">
              Многослойная конструкция “Тихий пол”
            </div>
          </div>
          <div className="renovation__item">
            <img src="/img/Technology/renovation/07.png" alt="" />
            <div className="renovation__subtitle grey">
              Система отопления UPONOR
            </div>
          </div>
          <div className="renovation__item">
            <img src="/img/Technology/renovation/08.jpg" alt="" />
            <div className="renovation__subtitle black">
              Установлены радиаторы BUDERUS
            </div>
          </div>
          <div className="renovation__item">
            <img src="/img/Technology/renovation/09.jpg" alt="" />
            <div className="renovation__subtitle blue">
              Индивидуальные приборы учета электроэнергии, воды, отопления
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

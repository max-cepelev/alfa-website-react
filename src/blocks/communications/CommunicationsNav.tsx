import React from 'react'

export default function CommunicationsNav() {
  return (
    <section className="communications-nav">
      <div className="communications-nav__container">
        <ul className="communications-nav__list scroll">
          <li className="communications-nav__item tabs active">
            <a href="#soundproofing" className="communications-nav__link">
              Звукоизоляция
            </a>
          </li>
          <li className="communications-nav__item tabs">
            <a href="#water" className="communications-nav__link">
              Фильтрация воды
            </a>
          </li>
          <li className="communications-nav__item tabs">
            <a href="#boiler-room" className="communications-nav__link">
              Котельная
            </a>
          </li>
          <li className="communications-nav__item tabs">
            <a href="#lift" className="communications-nav__link">
              Лифты
            </a>
          </li>
          <li className="communications-nav__item tabs">
            <a href="#heating" className="communications-nav__link">
              Отопление
            </a>
          </li>
          <li className="communications-nav__item tabs">
            <a href="#radiators" className="communications-nav__link">
              Радиаторы
            </a>
          </li>
          <li className="communications-nav__item tabs">
            <a href="#canalization" className="communications-nav__link">
              Канализация
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

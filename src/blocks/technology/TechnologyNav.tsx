import React from 'react'

export default function TechnologyNav() {
  return (
    <section className="technology-nav">
      <div className="technology-nav__container">
        <ul className="technology-nav__list scroll">
          <li className="technology-nav__item tabs active">
            <a href="#facades" className="technology-nav__link">
              Фасады
            </a>
          </li>
          <li className="technology-nav__item tabs">
            <a href="#walls" className="technology-nav__link">
              Стены
            </a>
          </li>
          <li className="technology-nav__item tabs">
            <a href="#flooring" className="technology-nav__link">
              Полы
            </a>
          </li>
          <li className="technology-nav__item tabs">
            <a href="#window" className="technology-nav__link">
              Окна
            </a>
          </li>
          <li className="technology-nav__item tabs">
            <a href="#renovation" className="technology-nav__link">
              Отделка
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

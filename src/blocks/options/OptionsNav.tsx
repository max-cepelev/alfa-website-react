import React from 'react'

export default function OptionsNav() {
  return (
    <section className="options-nav">
      <div className="options-nav__container">
        <ul className="options-nav__list scroll">
          <li className="options-nav__item tabs active">
            <a href="#facades" className="options-nav__link">
              Ипотека
            </a>
          </li>
          <li className="options-nav__item tabs">
            <a href="#walls" className="options-nav__link">
              Маткапитал
            </a>
          </li>
          <li className="options-nav__item tabs">
            <a href="#flooring" className="options-nav__link">
              Trade-in
            </a>
          </li>
          <li className="options-nav__item tabs">
            <a href="#window" className="options-nav__link">
              Рассрочка
            </a>
          </li>
          <li className="options-nav__item tabs">
            <a href="#renovation" className="options-nav__link">
              Субсидии
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

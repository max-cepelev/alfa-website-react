import React from 'react'

export default function ClientNav() {
  return (
    <section className="client-nav">
      <div className="client-nav__container">
        <ul className="client-nav__list">
          <li className="client-nav__item tabs active">
            <a href="#reception" className="client-nav__link">
              Передача квартир
            </a>
          </li>
          <li className="client-nav__item tabs">
            <a href="#guarantee" className="client-nav__link">
              Гарантийные обязательства
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

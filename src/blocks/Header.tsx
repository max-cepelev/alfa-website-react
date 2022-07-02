import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__body">
          <img className="header__logo" src="/img/logo.svg" alt="" />
          <nav className="header__menu menu">
            <ul className="menu__top-list">
              <li>
                <Link to="/card-apartament">Квартиры </Link>
              </li>
              <li>
                <Link to="/parking">Машиноместа</Link>
              </li>
              <li>
                <Link to="/larder">Кладовые</Link>
              </li>
              <li>
                <Link to="/card-commerce">Коммерция</Link>
              </li>
              <li>
                <a href="#">Аренда</a>
              </li>
            </ul>
            <ul className="menu__list">
              <li>
                <Link to="/projects">Новостройки</Link>
              </li>
              <li>
                <Link to="/catalog">Каталог</Link>
              </li>
              <li>
                <Link to="/standarts">Стандарты</Link>
              </li>
              <li>
                <a href="#">Компания</a>
              </li>
              <li>
                <Link to="/client">Покупателям</Link>
              </li>
            </ul>
            <div className="menu__contacts">
              <div className="menu__contact _icon-map">
                г. Пермь, ул. Карпинского, 49а
              </div>
              <a href="mailto:" className="menu__contact _icon-mail">
                ajakstroi@mail.ru
              </a>
              <div className="menu__socials">
                <a href="#" className="menu__social _icon-youtube"></a>
                <a href="#" className="menu__social _icon-vk"></a>
              </div>
            </div>
          </nav>
          <a href="tel:+73422554961" className="header__tel">
            +7 (342) 255-49-61
          </a>
          <button type="button" className="header__icon icon-menu">
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

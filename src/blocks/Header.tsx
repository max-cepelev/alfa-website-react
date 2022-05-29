import React, { useState } from 'react'

export default function Header() {
  const [menu, setMenu] = useState(false)
  return (
    <header className={`header ${menu ? 'menu-open' : ''}`}>
      <div className="header__top top-header">
        <div className="top-header__container">
          <ul
            data-da={`.main-header__menu,768 ${menu ? 'menu-open' : ''}`}
            className="top-header__list"
          >
            <li className="top-header__item">
              <a href="#" className="top-header__link">
                Квартиры
              </a>
            </li>
            <li className="top-header__item">
              <a href="#" className="top-header__link">
                Машиноместа
              </a>
            </li>
            <li className="top-header__item">
              <a href="#" className="top-header__link">
                Кладовые
              </a>
            </li>
            <li className="top-header__item">
              <a href="#" className="top-header__link">
                Коммерция
              </a>
            </li>
            <li className="top-header__item">
              <a href="#" className="top-header__link">
                Аренда
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__main main-header">
        <div className="main-header__container">
          <div className="main-header__body">
            <a href="#">
              <img className="main-header__logo" src=" /img/logo.svg" alt="" />
            </a>
            <nav className="main-header__menu menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Новостройки
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Каталог
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Стандарты
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Компания
                  </a>
                </li>
                <li className="menu__item">
                  <a href="#" className="menu__link">
                    Покупателям
                  </a>
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
            <a
              href="tel:+73422554961"
              className="main-header__tel _icon-telephone"
            >
              +7 (342) 255-49-61
            </a>
            <button
              onClick={() => setMenu(!menu)}
              type="button"
              className={`main-header__icon icon-menu ${
                menu ? 'menu-open' : ''
              }`}
            >
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main main-footer">
          <div className="main-footer__logo">
            <img src="/img/logo.svg" alt="" />
            <div className="main-footer__text">
              © Группа компаний <br />
              «Альфа», 2022
            </div>
          </div>
          <div className="main-footer__menu menu-footer">
            <div className="menu-footer__lists">
              <ul className="menu-footer__list">
                <li className="menu-footer__item">
                  <a href="#" className="menu-footer__link">
                    Новостройки
                  </a>
                </li>
                <li className="menu-footer__item">
                  <Link to="/catalog" className="menu-footer__link">
                    Каталог
                  </Link>
                </li>
                <li className="menu-footer__item">
                  <Link to="/standarts" className="menu-footer__link">
                    Стандарты
                  </Link>
                </li>
                <li className="menu-footer__item">
                  <a href="#" className="menu-footer__link">
                    Компания
                  </a>
                </li>
                <li className="menu-footer__item">
                  <Link to="/client" className="menu-footer__link">
                    Покупателям
                  </Link>
                </li>
                <li className="menu-footer__item">
                  <Link to="/news" className="menu-footer__link">
                    Новости
                  </Link>
                </li>
              </ul>
              <ul className="menu-footer__list">
                <li className="menu-footer__item">
                  <a href="#" className="menu-footer__link">
                    Квартиры
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href="#" className="menu-footer__link">
                    Машиноместа
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href="#" className="menu-footer__link">
                    Кладовые
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href="#" className="menu-footer__link">
                    Коммерция
                  </a>
                </li>
                <li className="menu-footer__item">
                  <a href="#" className="menu-footer__link">
                    Аренда
                  </a>
                </li>
              </ul>
            </div>
            <div
              data-spollers="1024"
              className="menu-footer__spollers spollers"
            >
              <button
                type="button"
                data-spoller
                className="spollers__title _icon-arrow"
              >
                Проекты <span>:</span>
              </button>
              <ul className="spollers__list">
                <li className="spollers__item">
                  <a href="" className="spollers__link">
                    Дом Скворцы
                  </a>
                </li>
                <li className="spollers__item">
                  <a href="" className="spollers__link">
                    Дом Танго
                  </a>
                </li>
                <li className="spollers__item">
                  <a href="" className="spollers__link">
                    Дом Hygge
                  </a>
                </li>
                <li className="spollers__item">
                  <a href="" className="spollers__link">
                    Дом Гавань
                  </a>
                </li>
                <li className="spollers__item">
                  <a href="" className="spollers__link">
                    Таунхаусы
                  </a>
                </li>
                <li className="spollers__item">
                  <a href="" className="spollers__link">
                    Дом Олимп
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-footer__contacts contacts-footer">
            <a
              href="tel:+73422008688"
              className="contacts-footer__contact _icon-telephone"
            >
              +7 (342) 200-86-88
            </a>
            <a href="#" className="contacts-footer__contact _icon-map">
              г. Пермь, ул. Карпинского, 49а
            </a>
            <a href="mailto:" className="contacts-footer__contact _icon-mail">
              ajakstroi@mail.ru
            </a>

            <div className="contacts-footer__socials">
              <div className="contacts-footer__subtitle">Наши соцсети:</div>
              <div className="contacts-footer__icons">
                <a href="#" className="contacts-footer__icon _icon-youtube"></a>
                <a href="#" className="contacts-footer__icon _icon-vk"></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copy text">
          Вся информация, представленная на данном сайте, носит исключительно
          информационный характер, не является офертой или публичной офертой
          согласно ст. 435, п. 2 ст. 437 ГК РФ.
        </div>
      </div>
    </footer>
  )
}

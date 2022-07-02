import React from 'react'
import { Link } from 'react-router-dom'

export default function Standarts() {
  return (
    <section className="standarts">
      <div className="standarts__container">
        <div className="standarts__body">
          <div className="standarts__title title">Стандарты</div>
          <div className="standarts__text text">
            <span>
              «Какого качества вода будет течь из моего крана?» «Будет ли слышно
              соседей?» «Сколько времени мне придется ждать лифт по утрам?»
            </span>
            <span>
              Мы отвечаем на главные вопросы покупателей тщательным
              проектированием и продуманной инженерией.
            </span>
          </div>
          <div className="standarts__cards standarts-cards">
            <Link to="/technology" className="standarts-cards__card item blue">
              <div className="standarts-cards__title">
                <span>технологии</span>
                <br />
                <span>строительства</span>
              </div>
              <ul className="standarts-cards__list">
                <li className="standarts-cards__item">
                  Окна и фурнитура служат десятилетиями
                </li>
                <li className="standarts-cards__item">
                  Отделка квартир готова к любому дизайну
                </li>
                <li className="standarts-cards__item">
                  Фасады эстетичные, долговечные
                </li>
                <li className="standarts-cards__item">Стены широкие, теплые</li>
                <li className="standarts-cards__item">
                  Пол многослойный, тихий
                </li>
              </ul>
              <div className="standarts-cards__button btn-black">Подробнее</div>
              <img
                className="standarts-cards__image"
                src="/img/standarts/01.png"
                alt=""
              />
            </Link>
            <Link
              to="/communications"
              className="standarts-cards__card item orange"
            >
              <div className="standarts-cards__title">
                <span>инженерные</span>
                <br />
                <span>коммуникации</span>
              </div>
              <ul className="standarts-cards__list">
                <li className="standarts-cards__item">
                  8 барьеров для звукоизоляции
                </li>
                <li className="standarts-cards__item">
                  Горизонтальная разводка отопления
                </li>
                <li className="standarts-cards__item">
                  Радиаторы с регулировкой температуры
                </li>
                <li className="standarts-cards__item">
                  Питьевая вода в каждой квартире
                </li>
                <li className="standarts-cards__item">Автономная котельная</li>
                <li className="standarts-cards__item">Лифты премиум-класса</li>
                <li className="standarts-cards__item">Бесшумная канализация</li>
              </ul>
              <div className="standarts-cards__button btn-black">Подробнее</div>
              <img
                className="standarts-cards__image"
                src="/img/standarts/02.png"
                alt=""
              />
            </Link>
            <Link
              to="/common-areas"
              className="standarts-cards__card item grey"
            >
              <div className="standarts-cards__title">
                <span>места общего</span>
                <br />
                <span>пользования</span>
              </div>
              <ul className="standarts-cards__list">
                <li className="standarts-cards__item">Бесключевой доступ</li>
                <li className="standarts-cards__item">Системы безопасности</li>
                <li className="standarts-cards__item">
                  Паркинг с топпинговым покрытием
                </li>
                <li className="standarts-cards__item">
                  Светильники с датчиками движения
                </li>
                <li className="standarts-cards__item">Колясочная</li>
                <li className="standarts-cards__item">Гостевой санузел</li>
                <li className="standarts-cards__item">
                  Грязезащитное покрытие
                </li>
                <li className="standarts-cards__item">Лапомойка для собак</li>
              </ul>
              <div className="standarts-cards__button btn-black">Подробнее</div>
              <img
                className="standarts-cards__image"
                src="/img/standarts/03.png"
                alt=""
              />
            </Link>
            <Link to="/territory" className="standarts-cards__card item black">
              <div className="standarts-cards__title">
                <span>придомовые</span>
                <br />
                <span>территории</span>
              </div>
              <ul className="standarts-cards__list">
                <li className="standarts-cards__item">Вход на уровне земли</li>
                <li className="standarts-cards__item">Освещение</li>
                <li className="standarts-cards__item">Навигация</li>
                <li className="standarts-cards__item">
                  Территория sport-friendly
                </li>
                <li className="standarts-cards__item">Двор-парк</li>
                <li className="standarts-cards__item">Покрытие площадок</li>
              </ul>
              <div className="standarts-cards__button btn-white">Подробнее</div>
              <img
                className="standarts-cards__image"
                src="/img/standarts/04.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import AreaSelector from '../components/Selector'
import LocationFilter from '../components/LocationFilter'
import MultiRangeSlider from '../components/MultiRangeInput'
import PriceFilter from '../components/PriceFilter'
import RoomsFilter from '../components/RoomsFilter'
import TimeFilter from '../components/TimeFilter'

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects__container">
        <div className="projects__body">
          <div className="projects__title title">наши проекты</div>
          <section className="filters-block">
            <div className="filters-block__body">
              <div className="filters-block__title">выберите квартиру</div>
              <form action="#" className="filters-block__filters">
                <RoomsFilter />
                <LocationFilter />
                {/* <PriceFilter /> */}
                <MultiRangeSlider
                  min={6000000}
                  max={15000000}
                  onChange={({ min, max }: { min: number; max: number }) =>
                    console.log(`min = ${min}, max = ${max}`)
                  }
                />
                <TimeFilter />
                <button type="submit" className="filters-button btn-orange">
                  Смотреть 530 квартир
                </button>
              </form>
            </div>
          </section>
          <div className="projects__actions projects-actions">
            <a
              href="mobileFilters.html"
              className="action-filters btn-orange _icon-filters"
            >
              Фильтры
            </a>
            <ul className="projects-actions__list">
              <li className="projects-actions__item">
                <a href="#" className="projects-actions__link _active">
                  В продаже
                </a>
              </li>
              <li className="projects-actions__item">
                <a href="#" className="projects-actions__link">
                  Строящиеся
                </a>
              </li>
              <li className="projects-actions__item">
                <a href="#" className="projects-actions__link">
                  Построенные
                </a>
              </li>
              <li className="projects-actions__item">
                <a href="#" className="projects-actions__link">
                  Перспективные
                </a>
              </li>
            </ul>
            <div className="projects-actions__sorts">
              <button className="projects-actions__tile _icon-tile _active">
                Плитка
              </button>
              <button className="projects-actions__map _icon-map">
                На карте
              </button>
            </div>
          </div>
          <div className="projects__items projects-items">
            <a href="#" className="projects-items__item ">
              <div className="projects-items__image">
                <img src="/img/projects/01.png" alt="" />
              </div>
              <div className="projects-items__info">
                <div className="projects-items__name">Таун-хаус</div>
                <div className="projects-items__price">от 5,8 млн/₽</div>
                <div className="projects-items__location _icon-map">
                  ул. Путейская, 12
                </div>
                <div className="projects-items__deadline">Сдан</div>
              </div>
              <button type="submit" className="projects-items__button">
                5 квартир
              </button>
            </a>
            <a href="#" className="projects-items__item ">
              <div className="projects-items__image">
                <img src="/img/projects/02.png" alt="" />
              </div>
              <div className="projects-items__info">
                <div className="projects-items__name">Дом Скворцы</div>
                <div className="projects-items__price">от 3,6 млн/₽</div>
                <div className="projects-items__location _icon-map">
                  ул. Клары Цеткин, 35
                </div>
                <div className="projects-items__deadline">II кв. 2023 г.</div>
              </div>
              <button type="submit" className="projects-items__button">
                132 квартиры
              </button>
            </a>
            <a href="#" className="projects-items__item ">
              <div className="projects-items__image">
                <img src="/img/projects/03.png" alt="" />
              </div>
              <div className="projects-items__info">
                <div className="projects-items__name">Дом Hygge</div>
                <div className="projects-items__price">от 8,4 млн/₽</div>
                <div className="projects-items__location _icon-map">
                  ул. Советской Армии, 64
                </div>
                <div className="projects-items__deadline">IV кв. 2022 г.</div>
              </div>
              <button type="submit" className="projects-items__button">
                1 квартира
              </button>
            </a>
            <a href="#" className="projects-items__item ">
              <div className="projects-items__image">
                <img src="/img/projects/04.png" alt="" />
              </div>
              <div className="projects-items__info">
                <div className="projects-items__name">Дом Гавань</div>
                <div className="projects-items__price">от 5,2 млн/₽</div>
                <div className="projects-items__location _icon-map">
                  ул. Подводников, 112
                </div>
                <div className="projects-items__deadline">IV кв. 2022 г.</div>
              </div>
              <button type="submit" className="projects-items__button">
                2 квартиры
              </button>
            </a>
            <a href="#" className="projects-items__item ">
              <div className="projects-items__image">
                <img src="/img/projects/05.png" alt="" />
              </div>
              <div className="projects-items__info">
                <div className="projects-items__name">Дом Танго</div>
                <div className="projects-items__price">от 4,7 млн/₽</div>
                <div className="projects-items__location _icon-map">
                  ул. Т. Барамзиной, 38
                </div>
                <div className="projects-items__deadline">IV кв. 2022 г.</div>
              </div>
              <button type="submit" className="projects-items__button">
                13 квартир
              </button>
            </a>
            <a href="#" className="projects-items__item ">
              <div className="projects-items__image">
                <img src="/img/projects/06.png" alt="" />
              </div>
              <div className="projects-items__info">
                <div className="projects-items__name">Дом Олимп</div>
                <div className="projects-items__price">от 3,6 млн/₽</div>
                <div className="projects-items__location _icon-map">
                  ул. Локомотивная, 1а
                </div>
                <div className="projects-items__deadline">Сдан</div>
              </div>
              <button type="submit" className="projects-items__button">
                12 квартир
              </button>
            </a>
          </div>
          <button type="submit" className="projects__button _icon-arrow">
            Посмотреть еще проекты
          </button>
        </div>
      </div>
    </section>
  )
}

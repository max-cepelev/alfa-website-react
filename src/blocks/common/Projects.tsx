import React, { useEffect, useState } from 'react'
import ButtonMore from '../../components/ButtonMore'
import ButtonWatch from '../../components/ButtonWatch'
import ButtonFilters from '../../components/ButtonFilters'
import RoomsFilter from '../../components/RoomsFilter'
import TimeFilter from '../../components/TimeFilter'
import getJsonData from '../../helpers/getJsonData'
import { IProperty } from '../../interfaces/Property'
import RangeFilter from '../../components/RangeFilter'
import LocationFilter from '../../components/LocationFilter'

interface IFilterState {
  areaIds: number[] | null
  rooms: number[] | null
  minFloor: number | null
  maxFloor: number | null
  minPrice: number | null
  maxPrice: number | null
  minArea: number | null
  maxArea: number | null
}

const options = [
  {
    id: 6,
    name: 'Дзержинский',
  },
  {
    id: 3,
    name: 'Индустриальный',
  },
  {
    id: 5,
    name: 'Кировский',
  },
  {
    id: 2,
    name: 'Ленинский',
  },
  {
    id: 1,
    name: 'Мотовилихинский',
  },
  {
    id: 7,
    name: 'Орджоникидзевский',
  },
  {
    id: 8,
    name: 'Пермский',
  },
  {
    id: 4,
    name: 'Свердловский',
  },
]

const data = [
  {
    id: 1,
    name: 'Таун-хаус',
    price: 5.8,
    address: 'ул. Путейская, 12',
    img: '/img/projects/01.png',
    commissioningDate: 'Сдан',
    flatsNumber: 5,
  },
  {
    id: 2,
    name: 'Дом Скворцы',
    price: 3.6,
    address: 'ул. Клары Цеткин, 35',
    img: '/img/projects/02.png',
    commissioningDate: 'II кв. 2023 г.',
    flatsNumber: 132,
  },
  {
    id: 3,
    name: 'Дом Hygge',
    price: 8.4,
    address: 'ул. Советской Армии, 64',
    img: '/img/projects/03.png',
    commissioningDate: 'IV кв. 2022 г.',
    flatsNumber: 1,
  },
  {
    id: 4,
    name: 'Дом Гавань',
    price: 5.2,
    address: 'ул. Подводников, 112',
    img: '/img/projects/04.png',
    commissioningDate: 'IV кв. 2022 г.',
    flatsNumber: 2,
  },
  {
    id: 5,
    name: 'Дом Танго',
    price: 4.7,
    address: 'ул. Т. Барамзиной, 38',
    img: '/img/projects/05.png',
    commissioningDate: 'IV кв. 2022 г.',
    flatsNumber: 13,
  },
  {
    id: 6,
    name: 'Дом Олимп',
    price: 3.6,
    address: 'ул. Локомотивная, 1а',
    img: '/img/projects/06.png',
    commissioningDate: 'Сдан',
    flatsNumber: 12,
  },
]

export default function Projects() {
  const [filter, setFilter] = useState<IFilterState>({
    areaIds: null,
    rooms: [1, 2],
    minFloor: 1,
    maxFloor: 15,
    minPrice: 5000000,
    maxPrice: 10000000,
    minArea: null,
    maxArea: null,
  })
  const [areas, setAreas] = useState<typeof options>([])

  // const [data, setData] = useState<IProperty[] | null>(null)

  // useEffect(() => {
  //   getJsonData('/properties.json').then((res: IProperty[]) => {
  //     setData(res)
  //   })
  // }, [])

  return (
    <section className="projects">
      <div className="projects__container">
        <div className="projects__body">
          <div className="projects__title title">наши проекты</div>
          <RoomsFilter />
          <RangeFilter
            name="Площадь"
            minValue={20}
            maxValue={200}
            valueFrom={filter.minArea}
            valueTo={filter.maxArea}
            onChange={(valueFrom, valueTo) =>
              setFilter({ ...filter, minArea: valueFrom, maxArea: valueTo })
            }
            className="filter-area"
            unit="м2"
          />
          <RangeFilter
            name="Этаж"
            minValue={1}
            maxValue={15}
            valueFrom={filter.minFloor}
            valueTo={filter.maxFloor}
            onChange={(valueFrom, valueTo) =>
              setFilter({ ...filter, minFloor: valueFrom, maxFloor: valueTo })
            }
            className="filter-floor"
          />
          <RangeFilter
            name="Цена"
            minValue={5000000}
            maxValue={10000000}
            valueFrom={filter.minPrice}
            valueTo={filter.maxPrice}
            onChange={(valueFrom, valueTo) =>
              setFilter({ ...filter, minPrice: valueFrom, maxPrice: valueTo })
            }
            unit="₽"
            className="filter-price"
          />
          <ButtonWatch title="Смотреть 530 квартир" />
          <LocationFilter
            options={options}
            selectedValues={areas}
            onChange={(arr) => setAreas(arr)}
          />
          <ButtonFilters />
          <div className="projects__actions projects-actions">
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
            {data.map((item) => (
              <a key={item.id} href="#" className="projects-items__item">
                <div className="projects-items__image">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="projects-items__info">
                  <div className="projects-items__name">{item.name}</div>
                  <div className="projects-items__price">
                    от {item.price.toLocaleString('ru-RU')} млн/₽
                  </div>
                  <div className="projects-items__location _icon-map">
                    {item.address}
                  </div>
                  <div className="projects-items__deadline">
                    {item.commissioningDate}
                  </div>
                </div>
                <button type="submit" className="projects-items__button">
                  квартир {item.flatsNumber}
                </button>
              </a>
            ))}
          </div>
          <ButtonMore title="Посмотреть еще проекты" />
        </div>
      </div>
    </section>
  )
}

import React, { useEffect, useState } from 'react'
import ButtonMore from '../../components/ButtonMore'
import LocationFilter from '../../components/LocationFilter'
import MultiRangeSlider from '../../components/MultiRangeInput'
import PriceFilter from '../../components/PriceFilter'
import RoomsFilter from '../../components/RoomsFilter'
import TimeFilter from '../../components/TimeFilter'
import getJsonData from '../../helpers/getJsonData'
import { IProperty } from '../../interfaces/Property'
import Select from 'react-select'

const options = [
  {
    value: 6,
    label: 'Дзержинский',
  },
  {
    value: 3,
    label: 'Индустриальный',
  },
  {
    value: 5,
    label: 'Кировский',
  },
  {
    value: 2,
    label: 'Ленинский',
  },
  {
    value: 1,
    label: 'Мотовилихинский',
  },
  {
    value: 7,
    label: 'Орджоникидзевский',
  },
  {
    value: 8,
    label: 'Пермский',
  },
  {
    value: 4,
    label: 'Свердловский',
  },
]

export default function Projects() {
  const [areas, setAreas] = useState<
    readonly { value: number; label: string }[]
  >([])

  console.log(areas)
  const [data, setData] = useState<IProperty[] | null>(null)

  useEffect(() => {
    getJsonData('/properties.json').then((res: IProperty[]) => {
      setData(res)
    })
  }, [])

  return (
    <section className="projects">
      <div className="projects__container">
        <div className="projects__body">
          <div className="projects__title title">наши проекты</div>
          <PriceFilter />
          <Select
            value={areas}
            options={options}
            isMulti
            onChange={(e) => setAreas(e)}
            placeholder="Выбрать район..."
            className="areaSelector"
            classNamePrefix="areaSelector"
          />
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
            {data &&
              data.map((item) => (
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

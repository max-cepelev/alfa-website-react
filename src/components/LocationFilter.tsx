import React from "react";

export default function LocationFilter() {
  return (
    <div className="filter-locations filter">
      <div className="filter-locations__content">
        <div className="filter-locations__title">Район</div>
        <div className="filter-locations__subtitle _icon-arrow">выбрать</div>
      </div>
      <div className="filter-locations__list scroll">
        <div className="filter-locations__column">
          <div className="filter-locations__location">
            <input
              id="l_1"
              className="filter-locations__input"
              type="checkbox"
              value="1"
            />
            <label htmlFor="l_1" className="filter-locations__label _icon-chek">
              Дзержинский
            </label>
          </div>
          <div className="filter-locations__location">
            <input
              id="l_2"
              className="filter-locations__input"
              type="checkbox"
              value="1"
            />
            <label htmlFor="l_2" className="filter-locations__label _icon-chek">
              Индустриальный
            </label>
          </div>
          <div className="filter-locations__location">
            <input
              id="l_3"
              className="filter-locations__input"
              type="checkbox"
              value="1"
            />
            <label htmlFor="l_3" className="filter-locations__label _icon-chek">
              Кировский
            </label>
          </div>
          <div className="filter-locations__location">
            <input
              id="l_4"
              className="filter-locations__input"
              type="checkbox"
              value="1"
            />
            <label htmlFor="l_4" className="filter-locations__label _icon-chek">
              Ленинский
            </label>
          </div>
        </div>
        <div className="filter-locations__column">
          <div className="filter-locations__location">
            <input
              id="l_5"
              className="filter-locations__input"
              type="checkbox"
              value="1"
            />
            <label htmlFor="l_5" className="filter-locations__label _icon-chek">
              Мотовилихинский
            </label>
          </div>
          <div className="filter-locations__location">
            <input
              id="l_6"
              className="filter-locations__input"
              type="checkbox"
              value="1"
            />
            <label htmlFor="l_6" className="filter-locations__label _icon-chek">
              Орджоникидзевский
            </label>
          </div>
          <div className="filter-locations__location">
            <input
              id="l_7"
              className="filter-locations__input"
              type="checkbox"
              value="1"
            />
            <label htmlFor="l_7" className="filter-locations__label _icon-chek">
              Свердловский
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

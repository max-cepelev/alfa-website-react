import React from "react";

export default function TimeFilter() {
  return (
    <div className="filter-time filter">
      <div className="filter-time__title _icon-arrow">Срок сдачи</div>
      <div className="filter-time__list scroll">
        <div className="filter-time__time">
          <input
            id="t_1"
            className="filter-time__input"
            type="checkbox"
            value="1"
          />
          <label htmlFor="t_1" className="filter-time__label ">
            Не важно
          </label>
        </div>
        <div className="filter-time__time">
          <input
            id="t_2"
            className="filter-time__input"
            type="checkbox"
            value="1"
          />
          <label htmlFor="t_2" className="filter-time__label ">
            Сдан
          </label>
        </div>
        <div className="filter-time__time">
          <input
            id="t_3"
            className="filter-time__input"
            type="checkbox"
            value="1"
          />
          <label htmlFor="t_3" className="filter-time__label ">
            II кв. 2022 г.
          </label>
        </div>
        <div className="filter-time__time">
          <input
            id="t_4"
            className="filter-time__input"
            type="checkbox"
            value="1"
          />
          <label htmlFor="t_4" className="filter-time__label ">
            III кв. 2022 г.
          </label>
        </div>
        <div className="filter-time__time">
          <input
            id="t_5"
            className="filter-time__input"
            type="checkbox"
            value="1"
          />
          <label htmlFor="t_5" className="filter-time__label ">
            IIII кв. 2022 г.
          </label>
        </div>
        <div className="filter-time__time">
          <input
            id="t_6"
            className="filter-time__input"
            type="checkbox"
            value="1"
          />
          <label htmlFor="t_6" className="filter-time__label ">
            I кв. 2023 г.
          </label>
        </div>
        <div className="filter-time__time">
          <input
            id="t_7"
            className="filter-time__input"
            type="checkbox"
            value="1"
          />
          <label htmlFor="t_7" className="filter-time__label ">
            II кв. 2023 г.
          </label>
        </div>
        <div className="filter-time__time">
          <input
            id="t_8"
            className="filter-time__input"
            type="checkbox"
            value="1"
          />
          <label htmlFor="t_8" className="filter-time__label ">
            III кв. 2023 г.
          </label>
        </div>
        <div className="filter-time__time">
          <input
            id="t_9"
            className="filter-time__input"
            type="checkbox"
            value="1"
          />
          <label htmlFor="t_9" className="filter-time__label ">
            IIII кв. 2023 г.
          </label>
        </div>
      </div>
    </div>
  );
}

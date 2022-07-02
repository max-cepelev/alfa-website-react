import React from 'react'

export default function Infrastructure() {
  return (
    <section className="infrastructure-home">
      <div className="infrastructure-home__container">
        <div className="infrastructure-home__title title">Инфраструктура</div>
      </div>
      <div className="infrastructure-home__content">
        <div className="infrastructure-home__container">
          <div className="infrastructure-home__objects infrastructure-objects">
            <div className="infrastructure-objects__title">
              <img src="/img/map/home.svg" alt="" />
              Дом Скворцы
            </div>
            <div className="infrastructure-objects__list">
              <div className="infrastructure-objects__object">
                <input
                  id="i_1"
                  className="infrastructure-objects__input"
                  type="checkbox"
                  value="1"
                />
                <label
                  htmlFor="i_1"
                  className="infrastructure-objects__label _icon-chek"
                >
                  Все объекты
                </label>
                <div className="infrastructure-objects__sum">45</div>
              </div>
              <div className="infrastructure-objects__object">
                <input
                  id="i_2"
                  className="infrastructure-objects__input"
                  type="checkbox"
                  value="1"
                />
                <label
                  htmlFor="i_2"
                  className="infrastructure-objects__label _icon-chek"
                >
                  <img
                    className="infrastructure-objects__image"
                    src="/img/map/stop.svg"
                    alt=""
                  />
                  Все объекты
                </label>
                <div className="infrastructure-objects__sum">3</div>
              </div>
              <div className="infrastructure-objects__object">
                <input
                  id="i_3"
                  className="infrastructure-objects__input"
                  type="checkbox"
                  value="1"
                />
                <label
                  htmlFor="i_3"
                  className="infrastructure-objects__label _icon-chek"
                >
                  <img
                    className="infrastructure-objects__image"
                    src="/img/map/kids.svg"
                    alt=""
                  />
                  Детские сады
                </label>
                <div className="infrastructure-objects__sum">5</div>
              </div>
              <div className="infrastructure-objects__object">
                <input
                  id="i_4"
                  className="infrastructure-objects__input"
                  type="checkbox"
                  value="1"
                />
                <label
                  htmlFor="i_4"
                  className="infrastructure-objects__label _icon-chek"
                >
                  <img
                    className="infrastructure-objects__image"
                    src="/img/map/school.svg"
                    alt=""
                  />
                  Школы
                </label>
                <div className="infrastructure-objects__sum">2</div>
              </div>
              <div className="infrastructure-objects__object">
                <input
                  id="i_5"
                  className="infrastructure-objects__input"
                  type="checkbox"
                  value="1"
                />
                <label
                  htmlFor="i_5"
                  className="infrastructure-objects__label _icon-chek"
                >
                  <img
                    className="infrastructure-objects__image"
                    src="/img/map/food.svg"
                    alt=""
                  />
                  Продуктовые магазины
                </label>
                <div className="infrastructure-objects__sum">10</div>
              </div>
              <div className="infrastructure-objects__object">
                <input
                  id="i_6"
                  className="infrastructure-objects__input"
                  type="checkbox"
                  value="1"
                />
                <label
                  htmlFor="i_6"
                  className="infrastructure-objects__label _icon-chek"
                >
                  <img
                    className="infrastructure-objects__image"
                    src="/img/map/entertainment.svg"
                    alt=""
                  />
                  Развлечения
                </label>
                <div className="infrastructure-objects__sum">15</div>
              </div>
              <div className="infrastructure-objects__object">
                <input
                  id="i_7"
                  className="infrastructure-objects__input"
                  type="checkbox"
                  value="1"
                />
                <label
                  htmlFor="i_7"
                  className="infrastructure-objects__label _icon-chek"
                >
                  <img
                    className="infrastructure-objects__image"
                    src="/img/map/health.svg"
                    alt=""
                  />
                  Здоровье
                </label>
                <div className="infrastructure-objects__sum">3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="infrastructure-home__map">
          <img src="/img/map/map.png" alt="" />
        </div>
      </div>
    </section>
  )
}

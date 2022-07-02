import React from 'react'

export default function Apartaments() {
  return (
    <section className="apartament">
      <div className="apartament__container">
        <div className="apartament__body">
          <div className="apartament__top">
            <div className="apartament__title">
              <div>
                2-к<span>омнатная</span> квартира <span>39,5 м2</span>
              </div>
              <a href="#" className="apartament__button btn-orange">
                Акция!
              </a>
            </div>
            <button type="submit" className="apartament__send _icon-send">
              <span>Поделиться</span>
            </button>
          </div>
          <div className="apartament__card card-apartament">
            <div className="card-apartament__visual visual-apartament">
              <div className="visual-apartament__tabs">
                <button
                  type="submit"
                  className="visual-apartament__tab tabs active"
                >
                  Планировка
                </button>
                <button type="submit" className="visual-apartament__tab tabs">
                  3D <span>планировка</span>
                </button>
                <button type="submit" className="visual-apartament__tab tabs">
                  Интерьеры
                </button>
                <button
                  type="submit"
                  className="visual-apartament__tab tabs mobile"
                >
                  На плане этажа
                </button>
                <button
                  type="submit"
                  className="visual-apartament__tab tabs mobile"
                >
                  На плане дома
                </button>
              </div>
              <div className="visual-apartament__slide">
                <div className="visual-apartament__arrow-prev arrow _icon-arrow"></div>
                <div className="visual-apartament__image">
                  <img src="/img/card-apartament/plan.jpg" alt="" />
                </div>
                <div className="visual-apartament__arrow-next arrow _icon-arrow"></div>
                <div className="visual-apartament__pagination pagination">
                  <span></span>
                  <span></span>
                  <span className="active"></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="card-apartament__info info-apartament">
              <div className="info-apartament__boxes boxes-apartament">
                <div className="boxes-apartament__big-box border">
                  <div className="boxes-apartament__column">
                    <div className="boxes-apartament__title">
                      Жилой комплекс
                    </div>
                    <div className="boxes-apartament__subtitle _icon-house">
                      Дом Скворцы
                    </div>
                    <div className="boxes-apartament__subtitle _icon-map">
                      ул. Подводников,112
                    </div>
                  </div>
                  <div className="boxes-apartament__column">
                    <div className="boxes-apartament__title">Срок сдачи</div>
                    <div className="boxes-apartament__subtitle">
                      II кв, 2022
                    </div>
                  </div>
                </div>
                <div className="boxes-apartament__small-boxes">
                  <div className="boxes-apartament__small-box border">
                    <div className="boxes-apartament__title">Площадь</div>
                    <div className="boxes-apartament__subtitle">39,2м2</div>
                  </div>
                  <div className="boxes-apartament__small-box border">
                    <div className="boxes-apartament__title">Квартира</div>
                    <div className="boxes-apartament__subtitle">№ 103</div>
                  </div>
                  <div className="boxes-apartament__small-box border">
                    <div className="boxes-apartament__title">Этаж</div>
                    <div className="boxes-apartament__subtitle">8 из 8</div>
                  </div>
                  <div className="boxes-apartament__small-box border">
                    <div className="boxes-apartament__title">Подъезд</div>
                    <div className="boxes-apartament__subtitle">1 из 3</div>
                  </div>
                  <div className="boxes-apartament__small-box border">
                    <div className="boxes-apartament__title">Цена за м2</div>
                    <div className="boxes-apartament__subtitle">
                      <span>15 000 ₽/м2</span>
                    </div>
                  </div>
                  <div className="boxes-apartament__small-box border">
                    <div className="boxes-apartament__title">Статус</div>
                    <div className="boxes-apartament__subtitle">Свободно</div>
                  </div>
                </div>
              </div>
              <div className="info-apartament__media">
                <a href="#" className="info-apartament__action _icon-download">
                  Скачать презентацию
                </a>
                <a href="#" className="info-apartament__action _icon-video">
                  Смотреть видео-тур по квартире
                </a>
              </div>
              <div className="info-apartament__price price-apartament border">
                <div className="price-apartament__title">
                  Стоимость квартиры
                </div>
                <div className="price-apartament__value">
                  4 384 500 ₽ <span>в ипотеку от 11 820 ₽/мес </span>
                </div>
                <a href="#" className="price-apartament__button btn-orange">
                  Получить консультацию
                </a>
              </div>
            </div>
            <div className="card-apartament__more more-apartament border">
              <div className="more-apartament__title">
                Квартиры такой же <br />
                планировки
              </div>
              <div className="more-apartament__subtitle">
                <span>Этаж</span>
                <span>Цена</span>
              </div>
              <div className="more-apartament__rows scroll">
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
                <div className="more-apartament__row">
                  <div className="more-apartament__floor">1</div>
                  <div className="more-apartament__price">4 384 500 ₽</div>
                </div>
              </div>
            </div>
          </div>
          <div className="apartament__plans">
            <img src="/img/card-apartament/plan.png" alt="" />
            <img src="/img/card-apartament/plan2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

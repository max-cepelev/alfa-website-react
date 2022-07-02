import React from 'react'

export default function Progress() {
  return (
    <section className="progress">
      <div className="progress__container">
        <div className="progress__items">
          <div className="progress__item blue">
            <div className="progress__title">1000+</div>
            <div className="progress__text">
              пермских семей живут в новых комфортных квартирах
            </div>
          </div>
          <div className="progress__item orange">
            <div className="progress__title">19</div>
            <div className="progress__text">
              жилых многоквартирных домов построено и сдано в эксплуатацию
            </div>
          </div>
          <div className="progress__item white">
            <div className="progress__title">10</div>
            <div className="progress__text">
              лет успешной работы на рынке недвижимостих
            </div>
          </div>
          <div className="progress__item black">
            <div className="progress__title">150+</div>
            <div className="progress__text">
              выскокопрофильных кадров работают в нашем коллективе
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

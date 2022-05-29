import React from 'react'

export default function Progress() {
  return (
    <section className="page__progress progress-block block">
      <div className="progress-block__container">
        <div className="progress-block__items">
          <div className="progress-block__item blue">
            <div className="progress-block__title">1000+</div>
            <div className="progress-block__text">
              пермских семей живут в новых комфортных квартирах
            </div>
          </div>
          <div className="progress-block__item orange">
            <div className="progress-block__title">19</div>
            <div className="progress-block__text">
              жилых многоквартирных домов построено и сдано в эксплуатацию
            </div>
          </div>
          <div className="progress-block__item white">
            <div className="progress-block__title">10</div>
            <div className="progress-block__text">
              лет успешной работы на рынке недвижимостих
            </div>
          </div>
          <div className="progress-block__item black">
            <div className="progress-block__title">150+</div>
            <div className="progress-block__text">
              выскокопрофильных кадров работают в нашем коллективе
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

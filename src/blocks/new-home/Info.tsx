import React from 'react'

export default function Info() {
  return (
    <section className="info-home">
      <div className="info-home__container">
        <div className="info-home__items">
          <div className="info-home__item blue">
            <div className="info-home__title">3 секции</div>
            <div className="info-home__text">какой-то текст</div>
          </div>
          <div className="info-home__item orange">
            <div className="info-home__title">8-10 этажей</div>
            <div className="info-home__text">тоже какой-то текст</div>
          </div>
          <div className="info-home__item white">
            <div className="info-home__title">248 квартир</div>
            <div className="info-home__text">и еще текст</div>
          </div>
          <div className="info-home__item black">
            <div className="info-home__title">-1 этаж</div>
            <div className="info-home__text">
              подземный паркинг, келлеры, комммерция на цокольном этаже
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

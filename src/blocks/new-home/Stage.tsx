import React from 'react'

export default function Stage() {
  return (
    <section className="stage-home">
      <div className="stage-home__container">
        <div className="stage-home__title title">Ход строительства</div>
        <div className="stage-home__stage">
          <div className="stage-home__line">
            <span></span>
            <span className="stage-home__percent"></span>
          </div>
          <span></span>
        </div>
        <div className="stage-home__time">Срок сдачи: II кв. 2023 г.</div>
        <div className="stage-home__items stage-items">
          <div className="stage-items__item">
            <img
              className="stage-items__image"
              src="/img/stage/01.jpg"
              alt=""
            />
            <div className="stage-items__data">Февраль 2022</div>
          </div>
          <div className="stage-items__item">
            <img
              className="stage-items__image"
              src="/img/stage/02.jpeg"
              alt=""
            />
            <div className="stage-items__data">Январь 2022</div>
          </div>
          <div className="stage-items__item">
            <img
              className="stage-items__image"
              src="/img/stage/03.jpeg"
              alt=""
            />
            <div className="stage-items__data">Декабрь 2021</div>
          </div>
          <div className="stage-items__item">
            <img
              className="stage-items__image"
              src="/img/stage/04.jpg"
              alt=""
            />
            <div className="stage-items__data">Ноябрь 2021</div>
          </div>
        </div>
        <div className="stage-home__pagination pagination">
          <span></span>
          <span></span>
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

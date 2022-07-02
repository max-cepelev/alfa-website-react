import React from 'react'

export default function Bathroom() {
  return (
    <section id="bathroom" className="bathroom">
      <div className="bathroom__container">
        <div className="bathroom__title">в санузлах:</div>
        <div className="bathroom__items">
          <div className="bathroom__item">
            <div className="bathroom__subtitle">Полотенце- сушитель</div>
            <div className="bathroom__text">из нержавеющей стали</div>
          </div>
          <div className="bathroom__item">
            <div className="bathroom__subtitle">Теплый пол</div>
            <div className="bathroom__text">
              благодаря горизонтальной разводке отопления
            </div>
          </div>
          <div className="bathroom__item">
            <div className="bathroom__subtitle">разводка</div>
            <div className="bathroom__text">коммуникаций до сантехприборов</div>
          </div>
          <div className="bathroom__item">
            <div className="bathroom__subtitle">стены</div>
            <div className="bathroom__text">выровнены и оштукатурены</div>
          </div>
        </div>
      </div>
    </section>
  )
}

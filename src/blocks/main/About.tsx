import React from 'react'

export default function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__body">
          <div className="about__title title">О компании</div>
          <div className="about__content">
            <div className="about__text text">
              Компании группы «Альфа» более 10 лет успешно занимаются
              гражданским строительством в Перми. Компании холдинга обладают
              собственными производственными мощностями и строительной техникой.
              За годы работы сложился стабильный трудовой коллектив, у нас
              работают высокопрофессиональные строительные кадры.
            </div>
            <img className="about__image" src="/img/about.svg" alt="" />
          </div>
          <a href="#" className="about__button btn-orange">
            Подробнее
          </a>
        </div>
      </div>
    </section>
  )
}

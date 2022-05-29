import React from 'react'

export default function About() {
  return (
    <section className="page__about about-block block">
      <div className="about-block__container">
        <div className="about-block__body">
          <div className="about-block__title title">О компании</div>
          <div className="about-block__content">
            <div className="about-block__text text">
              Компании группы «Альфа» более 10 лет успешно занимаются
              гражданским строительством в Перми. Компании холдинга обладают
              собственными производственными мощностями и строительной техникой.
              За годы работы сложился стабильный трудовой коллектив, у нас
              работают высокопрофессиональные строительные кадры.
            </div>
            <img className="about-block__image" src="/img/logo.svg" alt="" />
          </div>
          <a href="#" className="about-block__button btn-orange">
            Подробнее
          </a>
        </div>
      </div>
    </section>
  )
}

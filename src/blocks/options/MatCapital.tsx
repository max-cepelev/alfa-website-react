import React from 'react'

export default function MatCapital() {
  return (
    <section className="mat-capital">
      <div className="mat-capital__container">
        <div className="mat-capital__body">
          <div className="mat-capital__content">
            <div className="mat-capital__title title">маткапитал</div>
            <div className="mat-capital__text text">
              Купить квартиру на лучших условиях можно и с помощью материнского
              капитала, который выдается с 2007 года и является действенной
              поддержкой семей с детьми. В 2022 году материнский капитал на
              рождение первого ребенка составляет 524,5 тыс. рублей, на второго
              — 693,1 тыс. рублей. Он выдается только один раз, и если семья уже
              оформляла субсидию на первенца, а потом решилась на второго
              малыша, то доплата за него составит 168,6 тыс. рублей.
              <br />
              <br />
              Программа будет действовать до конца 2026 года. Получить
              маткапитал могут и папы, в одиночку воспитывающие детей.
              <br />
              <br />
              Материнский капитал можно направить на первоначальный взнос по
              ипотеке или оплатить часть уже взятого жилищного кредита.
            </div>
            <a href="#" className="mat-capital__button btn-orange">
              Хочу обсудить маткапитал
            </a>
          </div>
          <img
            className="mat-capital__image"
            src="/img/options-page/mat-capital.png"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

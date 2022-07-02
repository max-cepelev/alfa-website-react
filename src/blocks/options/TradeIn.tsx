import React from 'react'

export default function TradeIn() {
  return (
    <section className="trade-in">
      <div className="trade-in__container">
        <div className="trade-in__title title">TRADE-IN</div>
        <div className="trade-in__text text">
          Наша компания может принять квартиру на вторичном рынке в счет уплаты
          за новую в строящемся доме. <br />
          Такой обмен или trade-in будет выгоден людям, которые не могут или не
          хотят самостоятельно заниматься продажей своей недвижимости.
        </div>
        <a href="#" className="trade-in__button btn-orange">
          Хочу обсудить trade-in
        </a>
        <div className="trade-in__subtitle">
          три причины выбрать трейд-ин от Альфы:
        </div>
        <div className="trade-in__items trade-in-items">
          <div className="trade-in-items__item blue">
            <div className="trade-in-items__title">1 причина</div>
            <div className="trade-in-items__text text">
              мы замораживаем цену на приобретаемую квартиру на 1 месяц, в
              течение которого будет продано имеющееся жилье
            </div>
          </div>
          <div className="trade-in-items__item orange">
            <div className="trade-in-items__title">2 причина</div>
            <div className="trade-in-items__text text">
              квартира будет реализована квалифицированными риелторами по
              рыночной цене
            </div>
          </div>
          <div className="trade-in-items__item grey">
            <div className="trade-in-items__title">3 причина</div>
            <div className="trade-in-items__text text">
              эта услуга бесплатна для покупателя
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

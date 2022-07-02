import React from 'react'

export default function Installment() {
  return (
    <section className="installment">
      <div className="installment__container">
        <div className="installment__body">
          <div className="installment__content">
            <div className="installment__title title">Рассрочка</div>
            <div className="installment__text text">
              Квартиру можно приобрести в рассрочку, если точно известны даты и
              источники поступления всей суммы.
              <br />
              <br />
              Часто рассрочка выдается компанией-застройщиком без привлечения
              банков. Покупатель вносит первоначальную сумму, а оставшуюся
              выплачивает равными долями до окончания строительства.
              <br />
              <br />
              Компания Альфа всегда идет навстречу будущим новоселам и
              разрабатывает индивидуальные условия и графики выплат.
            </div>
            <a href="#" className="installment__button btn-orange">
              Хочу обсудить рассрочку
            </a>
          </div>
          <img
            className="installment__image"
            src="/img/options-page/installment.png"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

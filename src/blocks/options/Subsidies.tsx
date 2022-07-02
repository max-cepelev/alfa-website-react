import React from 'react'

export default function Subsidies() {
  return (
    <section className="subsidies">
      <div className="subsidies__container">
        <div className="subsidies__title title">субсидии</div>
        <div className="subsidies__items subsidies-items">
          <a href="#" className="subsidies-items__item blue item">
            <div className="subsidies-items__image">
              <img src="/img/options-page/subsidies/01.jpg" alt="" />
            </div>
            <div className="subsidies-items__content">
              <div className="subsidies-items__title">
                Субсидия для многодетных семей
              </div>
              <div className="subsidies-items__text text">
                450 тысяч рублей может получить многодетная семья, в которой
                хотя бы один ребенок родился после 1 января 2019 года.
                <br />
                <br />
                Субсидия целевая и предоставляется на погашение уже взятого
                ипотечного кредита или процентов по нему. Заем, под который
                можно получить субсидию, должен быть взят на покупку готового
                или строящегося жилья.
                <br />
                <br />
                Чтобы получить эту субсидию, нужно подписать ипотечный договор
                до 1 июля 2023 года.
                <br />
                <br />
                Эту поддержку можно суммировать с другими льготными программами,
                например с материнским капиталом.
              </div>
              <button
                type="submit"
                className="subsidies-items__button btn-black"
              >
                Хочу обсудить
              </button>
            </div>
          </a>
          <a href="#" className="subsidies-items__item orange item">
            <div className="subsidies-items__image">
              <img src="/img/options-page/subsidies/02.jpg" alt="" />
            </div>
            <div className="subsidies-items__content">
              <div className="subsidies-items__title">
                Программа «Молодая семья»
              </div>
              <div className="subsidies-items__text text">
                Получить сертификат на квартиру можно по программе для молодых
                супругов.
                <br />
                <br />
                Для этого нужно: — быть супругами в возрасте до 35 лет или
                одиноким родителем до 36 лет — быть платежеспособными, то есть
                иметь подтвержденный доход.
                <br />
                <br />
                И самое важное — семья должна нуждаться в улучшении жилищных
                условий. Это значит, что у супругов не должно быть в
                собственности жилья или его размер должен быть ниже
                установленной муниципалитетом нормы.
                <br />
                <br />
                При соблюдении всех условий можно получить сертификат на сумму
                до 30% от расчетной стоимости жилья. Субсидией можно оплатить
                участие в долевом строительстве, первоначальный взнос по ипотеке
                или погасить жилищный кредит.
              </div>
              <button
                type="submit"
                className="subsidies-items__button btn-black"
              >
                Хочу обсудить
              </button>
            </div>
          </a>
          <a href="#" className="subsidies-items__item grey item">
            <div className="subsidies-items__image">
              <img src="/img/options-page/subsidies/03.jpg" alt="" />
            </div>
            <div className="subsidies-items__content">
              <div className="subsidies-items__title">
                Государственный жилищный сертификат
              </div>
              <div className="subsidies-items__text text">
                Право на улучшение жилищных условий имеют граждане, выезжающие с
                территорий «Байконура» и Крайнего Севера, пострадавшие в аварии
                на Чернобыльской АЭС, ветераны ВОВ, сотрудники органов
                внутренних дел, вынужденные переселенцы, а также жители
                аварийных домов.
                <br />
                <br />
                Размер социальной выплаты рассчитывается от утвержденной
                стоимости квадратного метра жилья и от количества полагающейся
                площади на каждого члена семьи. Для одинокого человека — это 33
                м², для семьи из двух человек — 42 м², для больших семей — по 18
                м² на каждого.
                <br />
                <br />
                Сертификат можно направить на покупку жилья на вторичном и
                первичном рынке с доплатой или без.
              </div>
              <button
                type="submit"
                className="subsidies-items__button btn-black"
              >
                Хочу обсудить
              </button>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

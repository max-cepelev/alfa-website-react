import React from 'react'

export default function GoodBuy() {
  return (
    <section className="good-buy">
      <div className="good-buy__container">
        <div className="good-buy__title">Как выгодно купить квартиру</div>
        <div className="good-buy__text text">
          Вы можете рассчитывать на государственные программы по улучшению
          жилищных условий. Просто расскажите нашим специалистам о своей
          ситуации.
        </div>
        <div className="good-buy__items good-buy-items">
          <a href="#" className="good-buy-items__item item blue">
            <div className="good-buy-items__title">семейная ипотека</div>
            <div className="good-buy-items__text text">
              Программа действует с 2019 года и предположительно продлиться до
              31 декабря 2023 года.
              <br />
              <br />
              Этот вид льготной ипотеки позволяет получить кредит со ставкой до
              6% семьям, в которых с 1 января 2018 года родился первый или
              последующий ребенок.
              <br />
              <br />
              Для получения льготной ставки первоначальный взнос должен быть не
              менее 15% от стоимости жилья.
            </div>
            <div className="good-buy-items__btn-image">
              <div className="good-buy-items__button btn-black">
                Хочу обсудить
              </div>
              <img
                className="good-buy-items__image"
                src="/img/options-page/buy/01.png"
                alt=""
              />
            </div>
          </a>
          <a href="#" className="good-buy-items__item item orange">
            <div className="good-buy-items__title">
              ипотека с господдержкой для семей с детьми
            </div>
            <div className="good-buy-items__text text">
              Это вид субсидированной государством ипотеки действует до конца
              2022 года.
              <br />
              <br />
              Ей могут воспользоваться семьи, в которых в 2018-2022 годах
              появился второй ребенок или более, а также семьи с ребенком с
              особенностями здоровья до 18 лет.
              <br />
              <br />
              Первоначальный взнос по программе составляет 15%, а ставка – от
              0,1% в первый кредитный год.
            </div>
            <div className="good-buy-items__btn-image">
              <div className="good-buy-items__button btn-black">
                Хочу обсудить
              </div>
              <img
                className="good-buy-items__image"
                src="/img/options-page/buy/02.png"
                alt=""
              />
            </div>
          </a>
          <a href="#" className="good-buy-items__item item grey">
            <div className="good-buy-items__title">
              ипотека для IT-специалистов
            </div>
            <div className="good-buy-items__text text">
              Получить льготные условия по ипотечному кредиту могут граждане РФ,
              трудоустроенные в сфере информационных технологий.
              <br />
              <br />
              Заемщик должен быть в возрасте от 22 до 44 лет и располагать 15%
              от стоимости жилья на первоначальный взнос.
              <br />
              <br />
              При соблюдении всех условий можно рассчитывать на ставку до 5% и
              на сумму кредита до 18 млн рублей.
              <br />
              <br />
              Это вид ипотеки действует только на покупку квартиры на первичном
              жилищном рынке, то есть на покупку строящейся или готовой квартиры
              от застройщика.
            </div>
            <div className="good-buy-items__btn-image">
              <div className="good-buy-items__button btn-black">
                Хочу обсудить
              </div>
              <img
                className="good-buy-items__image"
                src="/img/options-page/buy/03.png"
                alt=""
              />
            </div>
          </a>
          <a href="#" className="good-buy-items__item item black">
            <div className="good-buy-items__title">военная ипотека</div>
            <div className="good-buy-items__text text">
              Программа накопительно-ипотечной системы обеспечения
              военнослужащих жильем действует с 2005 года. Ее участнику
              государство субсидирует первоначальный взнос и помогает
              выплачивать кредит во время прохождения службы.
              <br />
              <br />
              Воспользоваться этим видом ипотеки можно через три года после
              вступления в программу, когда накопится достаточный первоначальный
              взнос.
              <br />
              <br />
              Первоначальный взнос должен быть 15%, кредит выдается на срок до
              25 лет.
            </div>
            <div className="good-buy-items__btn-image">
              <div className="good-buy-items__button btn-white">
                Хочу обсудить
              </div>
              <img
                className="good-buy-items__image"
                src="/img/options-page/buy/04.png"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

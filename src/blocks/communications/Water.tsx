import React from 'react'

export default function Water() {
  return (
    <section id="water" className="water">
      <div className="water__container">
        <div className="water__title title">
          Питьевая вода в каждой квартире
        </div>
        <div className="water__text text">
          Человек ежедневно нуждается в 2-3 литрах качественной питьевой воды.
          Ее принято покупать в тяжелых бутылях, оплачивать курьерскую доставку
          или устанавливать в квартире фильтры. Жители наших домов не
          сталкиваются с этими хлопотами и лишними расходами. В техническом
          помещении каждого дома ГК «Альфа» смонтирована система очистки воды до
          уровня питьевой.
        </div>
        <div className="water__subtitle">
          Чтобы попасть в кран на кухне, вода проходит 6 ступеней фильтрации:
        </div>
        <div className="water__items water-items">
          <div className="water-items__item _icon-arrow blue">
            <div className="water-items__content">
              <div className="water-items__title">1 ступень</div>
              <div className="water-items__text text">
                Механическая очистка воды от крупных частиц и примесей
              </div>
            </div>
          </div>
          <div className="water-items__item _icon-arrow orange">
            <div className="water-items__content">
              <div className="water-items__title">2 ступень</div>
              <div className="water-items__text text">
                Удаление нежелательного железа и марганца
              </div>
            </div>
          </div>
          <div className="water-items__item _icon-arrow grey">
            <div className="water-items__content">
              <div className="water-items__title">3 ступень</div>
              <div className="water-items__text text">
                Извлечение солей кальция и магния, вызывающих образование накипи
              </div>
            </div>
          </div>
          <div className="water-items__item _icon-arrow black">
            <div className="water-items__content">
              <div className="water-items__title">4 ступень</div>
              <div className="water-items__text text">
                Процесс обратного осмоса, при котором молекулы воды
                пропускаются, а другие химические соединения уходят в дренаж
              </div>
            </div>
          </div>
          <div className="water-items__item _icon-arrow blue">
            <div className="water-items__content">
              <div className="water-items__title">5 ступень</div>
              <div className="water-items__text text">
                Обеззараживание и удаление бактерий, чтобы питьевая вода была
                безопасной для организма человека
              </div>
            </div>
          </div>
          <div className="water-items__item orange">
            <div className="water-items__content">
              <div className="water-items__title">6 ступень</div>
              <div className="water-items__text text">
                Внутриквартирный фильтр тонкой очистки (постфильтр) установлен
                на каждой кухне и запускается непосредственно перед наливом воды
              </div>
            </div>
          </div>
        </div>
        <div className="water__text text">
          Управляющая компания регулярно обслуживает водоочистное оборудование,
          меняет фильтры и раз в квартал проводит санитарно-эпидемиологическую и
          гигиеническую лабораторные экспертизы качества питьевой воды. Вода
          соответствует государственным санитарным нормам и правилам (СанПиН)
          1.2.3685-21 «Гигиенические нормативы и требования к обеспечению
          безопасности и (или) безвредности для человека факторов среды
          обитания».
          <br />
          <br />
          Для учета воды установлен отдельный счетчик, который автоматически
          отправляет показания в УК.
        </div>
      </div>
    </section>
  )
}

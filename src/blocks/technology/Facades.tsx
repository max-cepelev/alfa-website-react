import React from 'react'

export default function Facades() {
  return (
    <section id="facades" className="facades">
      <div className="facades__container">
        <div className="facades__title title">Фасады</div>
        <div className="facades__text text">
          Наши жилые комплексы возведены из самого надежного и долговечного
          материала - кирпича, а вот фасады имеют разные. Выбор эксерьера дома
          зависит от проектного решения, но любая наружная отделка не просто
          украшает строение, а защищает его от капризов климата. Качественный
          фасад делает любое здание красивее, теплее и продлевает срок службы.
        </div>
        <div className="facades__items facades-items">
          <div className="facades-items__item">
            <div className="facades-items__image">
              <img src="/img/Technology/facades/01.jpg" alt="" />
            </div>
            <div className="facades-items__content blue">
              <div className="facades-items__title">кирпичный фасад</div>
              <div className="facades-items__text text">
                Технология каменной кладки издавна используется в строительстве.
                Кирпич долговечен, экологически безопасен, хорошо сохраняет
                тепло, сдержанно красив, устойчив к температурным перепадам.
                Строители называют его «вечным», так как он не требует ухода,
                подновления, капитального ремонта. В наше время кирпичный фасад,
                как и другие виды, похож на сэндвич с теплоизоляционными
                материалами внутри.
              </div>
            </div>
          </div>
          <div className="facades-items__item">
            <div className="facades-items__image">
              <img src="/img/Technology/facades/02.png" alt="" />
            </div>
            <div className="facades-items__content orange">
              <div className="facades-items__title">оштукатуренный фасад</div>
              <div className="facades-items__text text">
                Верхний, декоративный слой может создаваться при помощи
                затвердевшего строительного раствора. Помимо штукатурки
                используются клей, мастика, краска, шпатлевка, грунтовка,
                утеплитель и другие материалы. Оштукатуренный фасад обеспечивает
                оптимальную теплозащиту здания, имеет выраженную фактуру,
                позволяет реализовать разнообразные дизайнерские решения во
                внешней отделке многоэтажного дома.
              </div>
            </div>
          </div>
          <div className="facades-items__item">
            <div className="facades-items__image">
              <img src="/img/Technology/facades/03.jpg" alt="" />
            </div>
            <div className="facades-items__content grey">
              <div className="facades-items__title">Вентилируемый фасад</div>
              <div className="facades-items__text text">
                Этот вид внешней отделки представляет собой многоуровневую
                навесную конструкцию с металлическим каркасом, нишей для
                свободной циркуляции воздуха, утеплителем, ветрозащитой и
                фасадной кассетой – наружной декоративной панелью из металла или
                камня. Вентилируемый фасад долговечен, огнестоек, сохраняет
                тепло здания, улучшает звукоизоляцию, придает дому стильный вид.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

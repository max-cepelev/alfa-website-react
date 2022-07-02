import React from 'react'

export default function Flooring() {
  return (
    <section id="flooring" className="flooring">
      <div className="flooring__container">
        <div className="flooring__body">
          <div className="flooring__title title">Полы</div>
          <div className="flooring__text text">
            Полы в наших домах выполнены по модернизированной технологии “тихий
            пол”. Такой пол не связан со стенами и плитами перекрытий, поэтому у
            него нет акустических мостиков для проникновения лишнего шума.
          </div>
          <div className="flooring__subtitle">
            Конструкция многослойного бесшумного пола:
          </div>
          <div className="flooring__items flooring-items">
            <div className="flooring-items__item">
              <div className="flooring-items__numb">1</div>
              <div className="flooring-items__text">
                Финишная отделка по выбору жильцов - <br />
                ламинат, паркет, плитка, линолеум, пробка
              </div>
            </div>
            <div className="flooring-items__item">
              <div className="flooring-items__numb">2</div>
              <div className="flooring-items__text">
                Демпферная лента в местах примыкания стены и стяжки поглощает
                звуки и мешает их распространению
              </div>
            </div>
            <div className="flooring-items__item">
              <div className="flooring-items__numb">3</div>
              <div className="flooring-items__text">
                Слой полусухой цементно-песчаной стяжки <br />
                толщиной 50 мм для выравнивания
              </div>
            </div>
            <div className="flooring-items__item">
              <div className="flooring-items__numb">4</div>
              <div className="flooring-items__text">
                Слой армированной пленки <br />
                для гидроизоляции
              </div>
            </div>
            <div className="flooring-items__item">
              <div className="flooring-items__numb">5</div>
              <div className="flooring-items__text">
                Лучевая система отопления UPONOR
              </div>
            </div>
            <div className="flooring-items__item">
              <div className="flooring-items__numb">6</div>
              <div className="flooring-items__text">
                Слой акустической звукоизоляции <br />
                “Эковер Стэп” толщиной 30 мм
              </div>
            </div>
            <div className="flooring-items__item">
              <div className="flooring-items__numb">7</div>
              <div className="flooring-items__text">
                Железобетонная плита <br />
                перекрытия толщиной 200 мм
              </div>
            </div>
          </div>
          <img
            className="flooring__image"
            src="/img/Technology/flooring.png"
            alt=""
          />
          <img
            className="flooring__image-mobile"
            src="/img/Technology/flooring-mobile.png"
            alt=""
          />
          <div className="flooring__text text">
            Пол держит тепло по всей площади укладки и имеет дополнительный
            подогрев в отдельных зонах. Покупателям квартир в жилых комплексах
            ГК «Альфа» не обязательно монтировать теплые полы. Зимой покрытие
            санузла и прихожей будет комфортной температуры благодаря
            магистральному трубопроводу под стяжкой.
          </div>
        </div>
      </div>
    </section>
  )
}

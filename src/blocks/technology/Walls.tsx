import React from 'react'

export default function Walls() {
  return (
    <section id="walls" className="walls">
      <div className="walls__container">
        <div className="walls__title title">Стены</div>
        <div className="walls__text text">
          В жилых комплексах межквартирные стены выполнены из кирпича, в внешние
          из кирпича или газобетонных блоков. Эти материалы обеспечивают
          оптимальный влагообмен между внешней и внутренней средами, создавая
          комфортный микроклимат в каждой квартире.
        </div>
        <div className="walls__items walls-items">
          <div className="walls-items__item">
            <div className="walls-items__image">
              <img src="/img/Technology/walls/01.png" alt="" />
            </div>
            <div className="walls-items__content">
              <div className="walls-items__title">Внешние стены</div>
              <div className="walls-items__text text">
                Толщина внешних стен в наших домах достигает полуметра,
                благодаря несущему кирпичному или газобетонному основанию,
                минераловатному утеплителю и облицовке фасада.
              </div>
            </div>
          </div>
          <div className="walls-items__item">
            <div className="walls-items__image">
              <img src="/img/Technology/walls/02.png" alt="" />
            </div>
            <div className="walls-items__content">
              <div className="walls-items__title">Межквартирные стены</div>
              <div className="walls-items__text text">
                Межквартирные стены и стены между местами общего пользования
                возводятся из кирпича в 250 мм толщиной с оштукатуриванием с
                двух сторон.
              </div>
            </div>
          </div>
          <div className="walls-items__item">
            <div className="walls-items__image">
              <img src="/img/Technology/walls/03.png" alt="" />
            </div>
            <div className="walls-items__content">
              <div className="walls-items__title">Межкомнатные стены</div>
              <div className="walls-items__text text">
                Стены внутри квартир выполняются из гипсовых пазогребеневых плит
                толщиной 80 мм с оштукатуриванием с двух сторон. Стены в
                санузлах также выполняются из пазогребневых плит с увеличенной
                толщиной в 100 мм.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'

export default function Window() {
  return (
    <section id="window" className="window">
      <div className="window__container">
        <div className="window__title title">Окна и фурнитура</div>
        <div className="window__text text">
          Мы устанавливаем окна немецкого бренда VEKA с 5-камерным профилем,
          2-камерным стеклопакетом и фурнитурой премиум-класса SIEGENIA, которая
          производится в Германии. С такими окнами не душно летом, не холодно
          зимой, и благодаря специальному замку безопасно, если в семье есть
          маленькие дети.
        </div>
        <div className="window__content">
          <div className="window__items window-items">
            <div className="window-items__item blue">
              <div className="window-items__title">Стеклопакеты</div>
              <div className="window-items__text text">
                В наших окнах используются 2-камерные стеклопакеты. Это
                конструкция из трех слоев стекла и двух воздушных камер между
                ними. Герметичная рамка не позволяет проникать влаге внутрь и
                собираться конденсату. Толщина такого стеклопакета — 21 мм.На
                лоджиях и балконах монтируется однокамерное остекление из ПВХ
                или алюминиевого профиля.
              </div>
              <span className="window-items__decoration-1"></span>
            </div>
            <div className="window-items__item orange">
              <div className="window-items__title">Профиль</div>
              <div className="window-items__text text">
                5-камерный оконный профиль немецкого бренда VEKA уменьшает
                теплообмен с улицей и купирует «точки холода». Он соответствуют
                единому европейскому сертификату качества RAL, который строже
                отечественных ГОСТов. Такие окна безвредны для природы и
                человека, пожаробезопасны и прочны. Регулярные натурные
                испытания производителя показали, что окна сохраняют функционал
                на протяжении 50 лет.
              </div>
              <span className="window-items__decoration-2"></span>
            </div>
            <div className="window-items__item white">
              <div className="window-items__title">Фурнитура</div>
              <div className="window-items__text text">
                Фурнитура обеспечивает крепление и открывание створок окна.
                Оконные механизмы определяют, насколько плотно створка прилегает
                к раме, как легко она открывается, как долго может
                эксплуатироваться. В многоквартирных домах используется немецкая
                оконная фурнитура SIEGENIA. Это гарантирует высочайшее качество
                исполнения и колоссальный запас использования. Можно запирать
                окна на детский замок, ставить на микропроветривание, открывать
                форточку или распахивать створки по несколько раз в день на
                протяжении десятилетий.
              </div>
              <span className="window-items__decoration-3"></span>
            </div>
          </div>
          <img src="/img/Technology/window.png" alt="окна" />
        </div>
        <div className="window__accessories window-accessories">
          <div className="window-accessories__title">
            Фурнитура SIEGENIA это:
          </div>
          <div className="window-accessories__items">
            <div className="window-accessories__item">
              <div className="window-accessories__subtitle">Надежность</div>
              <div className="window-accessories__text text">
                вес оконной створки может достигать 100-130 кг
              </div>
            </div>
            <div className="window-accessories__item">
              <div className="window-accessories__subtitle">
                6 режимов работы
              </div>
              <div className="window-accessories__text text">
                полное, микровентиляция, ступенчатый и щелевой воздухообмен,
                откидной режим, зима/лето
              </div>
            </div>
            <div className="window-accessories__item">
              <div className="window-accessories__subtitle">удобство</div>
              <div className="window-accessories__text text">
                мягкое открывание / закрывание одной рукой, регулируемая ширина
                откидывания и распахивания
              </div>
            </div>
            <div className="window-accessories__item">
              <div className="window-accessories__subtitle">
                защита от захлопывания
              </div>
              <div className="window-accessories__text text">
                створки на сквозняке, от открытия створки в откинутом положении
              </div>
            </div>
            <div className="window-accessories__item">
              <div className="window-accessories__subtitle">качество</div>
              <div className="window-accessories__text text">
                оптимальное шумопоглощение, плавная и неслышная работа деталей,
                пружинный компенсатор запора, препятствующий дребезжанию створки
              </div>
            </div>
            <div className="window-accessories__item">
              <div className="window-accessories__subtitle">
                энергоэффективность
              </div>
              <div className="window-accessories__text text">
                квартира защищена от потерь тепла, сквозняков, коррозии,
                попадания влаги извне
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

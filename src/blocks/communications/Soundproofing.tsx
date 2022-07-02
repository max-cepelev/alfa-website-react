import React from 'react'

export default function Soundproofing() {
  return (
    <section id="soundproofing" className="soundproofing">
      <div className="soundproofing__container">
        <div className="soundproofing__title title">
          7 барьеров для звукоизоляции
        </div>
        <div className="soundproofing__text text">
          Жить в соседних квартирах и не беспокоить друг друга сложно, но мы
          решили эту задачу при помощи оптимальных инженерных сисем.
        </div>
        <div className="soundproofing__items soundproofing-items">
          <div className="soundproofing-items__item blue">
            <div className="soundproofing-items__title">Полметра тишины</div>
            <div className="soundproofing-items__text text">
              Считается, что дом из традиционного кирпича самый надежный, однако
              технологии не стоят на месте. Мы возводим дома из привычного
              кирпича и из высококачественных газоблоков. Толщина стены
              составляет 43 см благодаря кладке или блоку в 250 мм,
              минераловатному утеплителю в 150 мм, оштукатуренному фасаду или
              облицовочному кирпичу. Газобетон лучше кирпича удерживает
              низкочастотный структурный шум, например от работающего
              кондиционера или сверления стены.
            </div>
            <span className="soundproofing-items__decoration-1"></span>
          </div>
          <div className="soundproofing-items__item orange">
            <div className="soundproofing-items__title">Тихий пол</div>
            <div className="soundproofing-items__text text">
              От проникновения структурного шума каждая квартира защищена
              звукоизоляционной минеральной плитой «Эковер стэп» 30 мм толщиной,
              лучшей в своем семействе. Параметр звукопоглощения измеряется от 0
              до 1. Материалы со значениями, близкими к нулю, звуки отражают,
              близкие к единице — поглощают. «Эковер степ» имеет коэффициент
              0,94, а значит, вбирает в себя все структурные шумы и гасит их. В
              наших квартирах нет ощущения, будто соседи «ходят по потолку», не
              слышно бегающих малышей, танцующих пар и топота собачьих лап.
            </div>
            <span className="soundproofing-items__decoration-2"></span>
          </div>
          <div className="soundproofing-items__item grey">
            <div className="soundproofing-items__title">За каменной стеной</div>
            <div className="soundproofing-items__text text">
              Между квартирами мы устанавливаем стены из керамического кирпича
              толщиной 250 мм. Показатель звукоизоляции для такой стены
              достигает 61 Дб. Жители домов ГК «Альфа» не слышат соседей с
              вокальными данными, звонки телефонов и громкую музыку, как это
              происходит в домах с пазогребневыми перегородками.
            </div>
            <span className="soundproofing-items__decoration-3"></span>
          </div>
          <div className="soundproofing-items__item black">
            <div className="soundproofing-items__title">Бесшумное движение</div>
            <div className="soundproofing-items__text text">
              Лифтовые шахты в наших домах изолированы и не примыкают к
              комнатам. Это решение закладывается на этапе проектирования
              каждого объекта и также направлено на снижение уровня шума и
              вибраций, создаваемых подъемными устройствами. Чем тише лифт, тем
              комфортнее проживание в доме. Помимо этого выполняется
              дополнительная шумо- и виброизоляция шахт. Мы выбрали для наших
              домов лифты премиальной марки BLT, которые практически не издают
              звука во время работы. Лифт не слышно ни на последнем этаже, ни на
              первом. Все механизмы лифта — двери, автоматика, главный привод,
              тормоза, отводные блоки, ролики — работают тихо и без посторонних
              звуков, нет вибраций, не скрипит кабина при движении.
            </div>
          </div>
          <div className="soundproofing-items__image">
            <img src="/img/Communications/Communications.png" alt="" />
          </div>
          <div className="soundproofing-items__item blue">
            <div className="soundproofing-items__title">Только спокойствие</div>
            <div className="soundproofing-items__text text">
              Во всех квартирах устанавливаются сейфовые входные двери
              современного дизайна с дополнительным шумопоглощением. Усиленный
              металлический короб, двойной контур уплотнения, минеральный
              звукоизоляционный слой — лучшие синонимы для слова «надежность».
            </div>
          </div>
          <div className="soundproofing-items__item orange">
            <div className="soundproofing-items__title">
              Пятикамерная защита
            </div>
            <div className="soundproofing-items__text text">
              Шумозащитные окна европейского бренда VEKA имеют 5 внутренних
              камер, которые останавливают холод и звук. Стеклопакет из трех
              стекол и двух воздушных камер обеспечивает коэффициент
              звукоизоляции 25–29 дБ. Премиальная оконная фурнитура SIEGENIA,
              произведенная в Германии, рассчитана на 20–25 тысяч циклов
              открываниязакрывания и будет служить не менее 20 лет.
            </div>
          </div>
          <div className="soundproofing-items__item grey">
            <div className="soundproofing-items__title">Долой все лишнее</div>
            <div className="soundproofing-items__text text">
              Помимо применения современных материалов и систем, мы выстраиваем
              физические преграды против шумов. Так, у 80% квартир внутренние
              коммуникации вынесены в общий коридор, поэтому у жителей просто
              нет возможности слышатьм звук льющейся или спускаемой у соседей
              воды.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

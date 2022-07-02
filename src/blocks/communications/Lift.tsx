import React from 'react'

export default function Lift() {
  return (
    <section id="lift" className="lift">
      <div className="lift__container">
        <div className="lift__body">
          <div className="lift__title title">Лифты премиум-класса</div>
          <div className="lift__text text">
            Мы знаем, как важно жителям многоэтажного дома не ждать подолгу
            лифт, особенно утром и вечером, когда соседи отправляются на работу
            и возвращаются домой. Поэтому в жилых комплексах ГК “Альфа”
            устанавливаются пассажирские и грузопассажирские лифты с увеличенным
            проемом для габаритных предметов.
          </div>
          <div className="lift__subtitle">
            Улучшенные характеристики лифтов BLT
          </div>
          <div className="lift__items lift-items">
            <div className="lift-items__item blue">
              <div className="lift-items__title">
                Уровень шума <br />
                25-30 дБ
              </div>
              <div className="lift-items__text text">
                Такой уровень шума сравним с шелестом листьев или обстановкой в
                библиотеке. Гигиенически комфортным для человека является
                уровень шума до 40 дБ.
              </div>
            </div>
            <div className="lift-items__item orange">
              <div className="lift-items__title">
                грузоподъемность 1000 кг/13 человек
              </div>
              <div className="lift-items__text text">
                Лифты современных жилых комплексов рассчитаны на большой
                пассажиропоток.
              </div>
            </div>
            <div className="lift-items__item grey">
              <div className="lift-items__title">
                Ширина двери <br />
                900 / 1200 мм
              </div>
              <div className="lift-items__text text">
                Перевезти детскую коляску, велосипед, мебель, крупную бытовую
                технику и другие габаритные вещи в лифте с такой шириной двери
                не составит труда.
              </div>
            </div>
            <div className="lift-items__item black">
              <div className="lift-items__title">
                Дизайн в суперлюксовом варианте
              </div>
              <div className="lift-items__text text">
                Стильный и антивандальный материал внутренней обшивки кабины,
                зеркальная нержавеющая сталь с гравировкой, каменный пол,
                прозрачное защитное пластиковое покрытие, которым кабина будет
                обшита на время заселения дома.
              </div>
            </div>
            <div className="lift-items__item blue">
              <div className="lift-items__title">Комфортное пользование</div>
              <div className="lift-items__text text">
                Плавность хода лифта, эстетически приятное оформление кабины,
                яркое светодиодное освещение, индикация на каждом этаже, речевой
                информатор, объявляющий этажи, просторность кабины.
              </div>
            </div>
          </div>
          <div className="lift__subtitle">
            Скорость перемещения лифта в домах ГК “Альфа” (м/сек)
          </div>
          <div className="lift__feature lift-feature">
            <div className="lift-feature__items">
              <div className="lift-feature__item">
                Высота дома
                <div>(этажей)</div>
              </div>
              <div className="lift-feature__item">Класс дома</div>
              <div className="lift-feature__item">“Стандарт”</div>
              <div className="lift-feature__item">“Комфорт”</div>
              <div className="lift-feature__item">до 10</div>
              <div className="lift-feature__item _bg">1</div>
              <div className="lift-feature__item _bg">1</div>
              <div className="lift-feature__item">до 15-16</div>
              <div className="lift-feature__item _bg">1</div>
              <div className="lift-feature__item _bg">1,6</div>
              <div className="lift-feature__item">до 2</div>
              <div className="lift-feature__item _bg">1,6</div>
              <div className="lift-feature__item _bg">2</div>
            </div>
            <div className="lift-feature__text text">
              Импортные подъемные устройства компании BLT можно назвать
              «мерседесом среди лифтов». Момент начала движения в них почти не
              ощущается, настолько тихо и плавно двигается кабина. Они
              отличаются оптимальной скоростью открывания-закрывания дверей,
              четким откликом на нажатие кнопок, ювелирным замедлением и
              отправлением без задержек — все это экономит драгоценные секунды в
              пути. Лифты не имеют машинного помещения в виде надстройки на
              крыше. Это благоприятно сказывается на облике современного дома.
            </div>
          </div>
          <div className="lift__image">
            <img src="/img/Communications/lift.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

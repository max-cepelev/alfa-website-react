import React from 'react'

export default function Radiators() {
  return (
    <section id="radiators" className="radiators">
      <div className="radiators__container">
        <div className="radiators__title title">
          Радиаторы с регулировкой температуры
        </div>
        <div className="radiators__info">
          <div className="radiators__image">
            <img src="/img/Communications/radiator.png" alt="" />
          </div>
          <div className="radiators__content">
            <div className="radiators__row">
              <div className="radiators__text text">
                Нам нравится находить технические решения, которые делают жизнь
                людей легче и приятнее. Поэтому мы устанавливаем стальные
                радиаторы Buderus. Они изготовлены из экологически безвредных
                материалов и имеют двухслойное антикоррозийное покрытие. При
                окрашивании используются составы без соединений тяжелых металлов
                и формальдегидных смол. Радиаторы Buderus прошли сертификацию и
                подтвердили соответствие ГОСТ 31311-2005. А еще за ними легко
                ухаживать.
              </div>
            </div>
            <div className="radiators__row">
              <div className="radiators__subtitle">Термоголовка радиатора</div>
              <div className="radiators__text text">
                К плюсам устройства можно отнести не только простоту в уходе и
                стильный внешний вид, но и невысокую тепловую инерцию, которая
                позволяет задавать в помещении нужную температуру. Здесь
                пользователю на помощь приходит термоголовка с температурным
                регулятором. На ней есть шкала от 1 до 5, которая соответствует
                температурным характеристикам — 19, 21, 23 градуса. Режим
                «снежинки» включает минимальную температуру для простой
                циркуляции. Термоголовка оснащена пазами, через которые проходит
                воздух. Его температура автоматически считывается и происходит
                открытие-закрытие внутреннего клапана-регулятора. Благодаря этой
                системе в каждой комнате можно задать нужную температуру.
              </div>
            </div>
            <div className="radiators__row">
              <div className="radiators__subtitle">
                Двусторонний моющийся радиатор
              </div>
              <div className="radiators__text text">
                Двумя легкими нажатиями можно снять верхнюю решетку прибора и
                промыть его внутри от пыли. Если во время эксплуатации случайно
                повредилось лакокрасочное покрытие, этот радиатор можно
                перевернуть другой стороной к стене, ведь у него нет наваренных
                кронштейнов, как у стандартных отопительных приборов.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

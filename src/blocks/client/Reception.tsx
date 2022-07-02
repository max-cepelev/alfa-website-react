import React from 'react'

export default function Reception() {
  return (
    <section id="reception" className="reception">
      <div className="reception__container">
        <div className="reception__title title">Передача квартир</div>
        <div className="reception__subtitle">9 шагов до приемки квартиры</div>
        <div className="reception__items reception-items">
          <div className="reception-items__item blue">
            <div className="reception-items__title">
              <span>1</span> заключение
              <p style={{ textTransform: 'uppercase' }}>ДДУ</p>
            </div>
            <div className="reception-items__text text">
              Договор долевого участия подписывается после выбора и оплаты
              квартиры. Следить за новостями строящегося дома можно на
              официальном сайте Единой информационной системы жилищного
              строительства
            </div>
          </div>
          <div className="reception-items__item orange">
            <div className="reception-items__title">
              <span>2</span>
              <div>Уточнение личных данных</div>
            </div>
            <div className="reception-items__text text">
              Пока ваш дом растет день ото дня, убедитесь, что за последнее
              время не меняли фамилию, прописку и другие паспортные параметры.
              Если такое произошло, сообщите об этом застройщику
            </div>
          </div>
          <div className="reception-items__item grey">
            <div className="reception-items__title">
              <span>3</span>
              <div>Ввод дома в эксплуатацию</div>
            </div>
            <div className="reception-items__text text">
              Это важное событие, но получать ключи пока рано
            </div>
          </div>
          <div className="reception-items__item black">
            <div className="reception-items__title">
              <span>4</span>Обмер площадей
            </div>
            <div className="reception-items__text text">
              БТИ утвердит площади многоквартирного дома для постановки на
              кадастровый учет. Теперь Росреестр «видит» вашу квартиру как
              объект недвижимости, который можно оформлять в собственность)
            </div>
          </div>
          <div className="reception-items__item blue">
            <div className="reception-items__title">
              <span>5</span>Вам письмо!
            </div>
            <div className="reception-items__text text">
              Застройщик направляет по почте уведомление, что дом введен в
              эксплуатацию, там же содержится информация о приемке квартиры и об
              изменении площади в большую или меньшую сторону после обмера БТИ.
              Если квартира «подросла», нужно будет перевести недостающую сумму
              на реквизиты компании, а если «ужалась», то оставить свои для
              возврата денег
            </div>
          </div>
          <div className="reception-items__item orange">
            <div className="reception-items__title">
              <span>6</span>
              <div>Два дня до приемки</div>
            </div>
            <div className="reception-items__text text">
              Убедитесь, что погасили задолженность перед застройщиком, или
              получили денежный возврат
            </div>
          </div>
          <div className="reception-items__item grey">
            <div className="reception-items__title">
              <span>7</span>
              <div>приемка квартиры</div>
            </div>
            <div className="reception-items__text text">
              Дольщик впервые приезжает в свою квартиру, где его встречает
              мастер с пакетом документов для подписания, – это акты приемки
              квартиры и ключей, инструкция по эксплуатации недвижимости,
              паспорта на приборы учета, схема расположения разводки
              коммуникаций. Мастер покажет помещение, снимет первые показания со
              счетчиков и передаст их в УК. А еще оставит ключи – от квартиры,
              подъезда, почтового ящика, оконных конструкций, кладовой
            </div>
          </div>
          <div className="reception-items__item black">
            <div className="reception-items__title">
              <span>8</span>
              <div>Оформление собственности</div>
            </div>
            <div className="reception-items__text text">
              Нужно принести в МФЦ акт приемки недвижимости, справку из
              бухгалтерии компании-застройщика об исполнении финансовых
              обязательств, квитанцию об уплате госпошлины, ДДУ, паспорта
              будущих собственников
            </div>
          </div>
          <div className="reception-items__item blue">
            <div className="reception-items__title">
              <span>9</span>
              <div>Имеете полное право</div>
            </div>
            <div className="reception-items__text text">
              Регистрация занимает не более 9 рабочих дней. После вступления в
              право собственности квартирой можно распоряжаться – продавать,
              дарить, закладывать, завещать. Можно отложить эту процедуру или
              вообще не вступать в собственность. В этом случае объектом
              разрешается владеть и пользоваться
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

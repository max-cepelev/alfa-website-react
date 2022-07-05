import React from 'react'
import ButtonMore from '../../components/ButtonMore'

export default function Table() {
  return (
    <section className="table">
      <div className="table__container">
        <div className="table__content">
          <ul className="table__header table-header">
            <li className="table-header__item">Схема</li>
            <li className="table-header__item _icon-arrow">Комнат</li>
            <li className="table-header__item">Жилой комплекс</li>
            <li className="table-header__item">Подъезд</li>
            <li className="table-header__item _icon-arrow">Этаж</li>
            <li className="table-header__item _icon-arrow">Площадь</li>
            <li className="table-header__item _icon-arrow">Цена за м2</li>
            <li className="table-header__item _icon-arrow">Стоимость</li>
            <li className="table-header__item">Статус</li>
          </ul>
          <div className="table__body table-body">
            <ul className="table-body__row">
              <li className="table-body__item">
                <img src="/img/catalog-apartaments/image 3.png" alt="" />
              </li>
              <li className="table-body__item">
                <div>1</div>
                <span>-комн,</span>
              </li>
              <li className="table-body__item">Дом Гавань</li>
              <li className="table-body__item">
                <div>1</div>
              </li>
              <li className="table-body__item">
                10 <span>из 20</span>
                <span>этаж</span>
              </li>
              <li className="table-body__item">
                43.5 м2 <span>,</span>
              </li>
              <li className="table-body__item">15 000 ₽/м2</li>
              <li className="table-body__item">2 500 000 ₽</li>
              <li className="table-body__item">Свободно</li>
            </ul>
            <ul className="table-body__row">
              <li className="table-body__item">
                <img src="/img/catalog-apartaments/image 3.png" alt="" />
              </li>
              <li className="table-body__item">
                <div>1</div>
                <span>-комн,</span>
              </li>
              <li className="table-body__item">Дом Гавань</li>
              <li className="table-body__item">
                <div>1</div>
              </li>
              <li className="table-body__item">
                10 <span>из 20</span>
                <span>этаж</span>
              </li>
              <li className="table-body__item">
                43.5 м2 <span>,</span>
              </li>
              <li className="table-body__item">15 000 ₽/м2</li>
              <li className="table-body__item">2 500 000 ₽</li>
              <li className="table-body__item">Свободно</li>
            </ul>
            <ul className="table-body__row">
              <li className="table-body__item">
                <img src="/img/catalog-apartaments/image 3.png" alt="" />
              </li>
              <li className="table-body__item">
                <div>1</div>
                <span>-комн,</span>
              </li>
              <li className="table-body__item">Дом Гавань</li>
              <li className="table-body__item">
                <div>1</div>
              </li>
              <li className="table-body__item">
                10 <span>из 20</span>
                <span>этаж</span>
              </li>
              <li className="table-body__item">
                43.5 м2 <span>,</span>
              </li>
              <li className="table-body__item">15 000 ₽/м2</li>
              <li className="table-body__item">2 500 000 ₽</li>
              <li className="table-body__item">Свободно</li>
            </ul>
            <ul className="table-body__row">
              <li className="table-body__item">
                <img src="/img/catalog-apartaments/image 3.png" alt="" />
              </li>
              <li className="table-body__item">
                <div>1</div>
                <span>-комн,</span>
              </li>
              <li className="table-body__item">Дом Гавань</li>
              <li className="table-body__item">
                <div>1</div>
              </li>
              <li className="table-body__item">
                10 <span>из 20</span>
                <span>этаж</span>
              </li>
              <li className="table-body__item">
                43.5 м2 <span>,</span>
              </li>
              <li className="table-body__item">15 000 ₽/м2</li>
              <li className="table-body__item">2 500 000 ₽</li>
              <li className="table-body__item">Свободно</li>
            </ul>
            <ul className="table-body__row">
              <li className="table-body__item">
                <img src="/img/catalog-apartaments/image 3.png" alt="" />
              </li>
              <li className="table-body__item">
                <div>1</div>
                <span>-комн,</span>
              </li>
              <li className="table-body__item">Дом Гавань</li>
              <li className="table-body__item">
                <div>1</div>
              </li>
              <li className="table-body__item">
                10 <span>из 20</span>
                <span>этаж</span>
              </li>
              <li className="table-body__item">
                43.5 м2 <span>,</span>
              </li>
              <li className="table-body__item">15 000 ₽/м2</li>
              <li className="table-body__item">2 500 000 ₽</li>
              <li className="table-body__item">Свободно</li>
            </ul>
          </div>
          <ButtonMore title="Посмотреть еще 10 из 60" />
        </div>
      </div>
    </section>
  )
}

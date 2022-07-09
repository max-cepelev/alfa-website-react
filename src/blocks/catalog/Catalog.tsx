import React from 'react';
import { Link } from 'react-router-dom';

export default function Catalog() {
   return (
      <section className="catalog">
         <div className="catalog__container">
            <div className="catalog__title title">Каталог</div>
            <div className="catalog__items">
               <Link to="/catalog-apartaments" className="catalog__item item blue">
                  <div className="catalog__title-item _icon-arrow">Квартиры</div>
                  <div className="catalog__button btn-black">Выбрать</div>
                  <img src="/img/catalog/01.png" alt="" />
               </Link>
               <Link to="/parking" className="catalog__item item orange">
                  <div className="catalog__title-item _icon-arrow">Машиноместа</div>
                  <div className="catalog__button btn-black">Выбрать</div>
                  <img src="/img/catalog/02.png" alt="" />
               </Link>
               <Link to="/larder" className="catalog__item item grey">
                  <div className="catalog__title-item _icon-arrow">Кладовые</div>
                  <div className="catalog__button btn-black">Выбрать</div>
                  <img src="/img/catalog/03.png" alt="" />
               </Link>
               <Link to="/commerce" className="catalog__item item black">
                  <div className="catalog__title-item _icon-arrow">Коммерция</div>
                  <div className="catalog__button btn-white">Выбрать</div>
                  <img src="/img/catalog/04.png" alt="" />
               </Link>
               <Link to="/rent-commerce" className="catalog__item item blue">
                  <div className="catalog__title-item _icon-arrow">аренда</div>
                  <div className="catalog__button btn-black">Выбрать</div>
                  <img src="/img/catalog/05.png" alt="" />
               </Link>
            </div>
         </div>
      </section>
   );
}

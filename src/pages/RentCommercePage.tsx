import Footer from "../blocks/Footer";
import Header from "../blocks/Header";
import AreaSelector from "../components/filters/AreaSelector";
import ButtonWatch from "../components/ButtonWatch";
import ButtonMore from "../components/ButtonMore/index";
import ButtonFilters from "../components/ButtonFilters";
import PriceFilter from "../components/filters/PriceFilter";
import LocationFilter from "../components/filters/LocationFilter";
import ComplexFilter from "../components/filters/ComplexFilter";
import FloorFilter from "../components/filters/FloorFilter";
import EntranceFilter from "../components/filters/EntranceFilter";
import RoomTypeFilter from "../components/filters/RoomTypeFilter";
import Clear from "../components/Clear";
import { useState } from "react";

export default function RentCommercePage() {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <nav className="breadcrumbs">
          <div className="breadcrumbs__container">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="#" className="breadcrumbs__link">
                  Главная
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a href="#" className="breadcrumbs__link">
                  Каталог
                </a>
              </li>
              <li className="breadcrumbs__item">
                <a href="#" className="breadcrumbs__current">
                  Аренда
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <section className="rent-commerce-filters">
          <div className="rent-commerce-filters__container">
            <div className="rent-commerce-filters__title title">
              аренда коммерции
            </div>
            <form action="#" className="rent-commerce-filters__body">
              <div className="rent-commerce-filters__top">
                <ComplexFilter />
                <RoomTypeFilter />
                <AreaSelector minValue={20} maxValue={100} />
                <PriceFilter minValue={5000000} maxValue={10000000} />
                <LocationFilter />
                <FloorFilter minValue={0} maxValue={15} />
                <EntranceFilter />
                <Clear />
              </div>
              <div className="rent-commerce-filters__button">
                <ButtonWatch title={"Смотреть 10 помещений"} />
              </div>
            </form>
            <ButtonFilters />
          </div>
        </section>
        <section className="rent-commerce-table">
          <div className="rent-commerce-table__container">
            <div className="rent-commerce-table__content">
              <ul className="rent-commerce-table__header rent-commerce-table-header">
                <li className="rent-commerce-table-header__item">Схема</li>
                <li className="rent-commerce-table-header__item _icon-arrow">
                  Комнат
                </li>
                <li className="rent-commerce-table-header__item">
                  Жилой комплекс
                </li>
                <li className="rent-commerce-table-header__item">Подъезд</li>
                <li className="rent-commerce-table-header__item _icon-arrow">
                  Этаж
                </li>
                <li className="rent-commerce-table-header__item _icon-arrow">
                  Площадь
                </li>
                <li className="rent-commerce-table-header__item _icon-arrow">
                  Цена за м2
                </li>
                <li className="rent-commerce-table-header__item _icon-arrow">
                  Стоимость/мес
                </li>
              </ul>
              <div className="rent-commerce-table__body rent-commerce-table-body">
                <ul className="rent-commerce-table-body__row">
                  <li className="rent-commerce-table-body__item">
                    <img src="img/catalog-apartaments/image 3.png" alt="" />
                  </li>
                  <li className="rent-commerce-table-body__item">
                    <div>1</div>
                    <span>-комн,</span>
                  </li>
                  <li className="rent-commerce-table-body__item">Дом Гавань</li>
                  <li className="rent-commerce-table-body__item">
                    <div>1</div>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    10 <span>из 20</span>
                    <span>этаж</span>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    43.5 м2 <span>,</span>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    15 000 ₽/м2
                  </li>
                  <li className="rent-commerce-table-body__item">25 000 ₽</li>
                </ul>
                <ul className="rent-commerce-table-body__row">
                  <li className="rent-commerce-table-body__item">
                    <img src="img/catalog-apartaments/image 3.png" alt="" />
                  </li>
                  <li className="rent-commerce-table-body__item">
                    <div>1</div>
                    <span>-комн,</span>
                  </li>
                  <li className="rent-commerce-table-body__item">Дом Гавань</li>
                  <li className="rent-commerce-table-body__item">
                    <div>1</div>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    10 <span>из 20</span>
                    <span>этаж</span>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    43.5 м2 <span>,</span>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    15 000 ₽/м2
                  </li>
                  <li className="rent-commerce-table-body__item">25 000 ₽</li>
                </ul>
                <ul className="rent-commerce-table-body__row">
                  <li className="rent-commerce-table-body__item">
                    <img src="img/catalog-apartaments/image 3.png" alt="" />
                  </li>
                  <li className="rent-commerce-table-body__item">
                    <div>1</div>
                    <span>-комн,</span>
                  </li>
                  <li className="rent-commerce-table-body__item">Дом Гавань</li>
                  <li className="rent-commerce-table-body__item">
                    <div>1</div>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    10 <span>из 20</span>
                    <span>этаж</span>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    43.5 м2 <span>,</span>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    15 000 ₽/м2
                  </li>
                  <li className="rent-commerce-table-body__item">25 000 ₽</li>
                </ul>
                <ul className="rent-commerce-table-body__row">
                  <li className="rent-commerce-table-body__item">
                    <img src="img/catalog-apartaments/image 3.png" alt="" />
                  </li>
                  <li className="rent-commerce-table-body__item">
                    <div>1</div>
                    <span>-комн,</span>
                  </li>
                  <li className="rent-commerce-table-body__item">Дом Гавань</li>
                  <li className="rent-commerce-table-body__item">
                    <div>1</div>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    10 <span>из 20</span>
                    <span>этаж</span>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    43.5 м2 <span>,</span>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    15 000 ₽/м2
                  </li>
                  <li className="rent-commerce-table-body__item">25 000 ₽</li>
                </ul>
                <ul className="rent-commerce-table-body__row">
                  <li className="rent-commerce-table-body__item">
                    <img src="img/catalog-apartaments/image 3.png" alt="" />
                  </li>
                  <li className="rent-commerce-table-body__item">
                    <div>1</div>
                    <span>-комн,</span>
                  </li>
                  <li className="rent-commerce-table-body__item">Дом Гавань</li>
                  <li className="rent-commerce-table-body__item">
                    <div>1</div>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    10 <span>из 20</span>
                    <span>этаж</span>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    43.5 м2 <span>,</span>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    15 000 ₽/м2
                  </li>
                  <li className="rent-commerce-table-body__item">25 000 ₽</li>
                </ul>
                <ul className="rent-commerce-table-body__row">
                  <li className="rent-commerce-table-body__item">
                    <img src="img/catalog-apartaments/image 3.png" alt="" />
                  </li>
                  <li className="rent-commerce-table-body__item">
                    <div>1</div>
                    <span>-комн,</span>
                  </li>
                  <li className="rent-commerce-table-body__item">Дом Гавань</li>
                  <li className="rent-commerce-table-body__item">
                    <div>1</div>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    10 <span>из 20</span>
                    <span>этаж</span>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    43.5 м2 <span>,</span>
                  </li>
                  <li className="rent-commerce-table-body__item">
                    15 000 ₽/м2
                  </li>
                  <li className="rent-commerce-table-body__item">25 000 ₽</li>
                </ul>
              </div>
              <ButtonMore title="Посмотреть еще 10 из 60" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

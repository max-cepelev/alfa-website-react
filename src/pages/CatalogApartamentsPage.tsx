import React from "react";
import Table from "../blocks/common/Table";
import Footer from "../blocks/Footer";
import Header from "../blocks/Header";
import AreaSelector from "../components/filters/AreaSelector";
import ButtonWatch from "../components/ButtonWatch";
import ButtonFilters from "../components/ButtonFilters";
import FloorFilter from "../components/filters/FloorFilter";
import EntranceFilter from "../components/filters/EntranceFilter";
import PriceFilter from "../components/filters/PriceFilter";
import LocationFilter from "../components/filters/LocationFilter";
import RoomsFilter from "../components/filters/RoomsFilter";
import ComplexFilter from "../components/filters/ComplexFilter";
import TimeFilter from "../components/filters/TimeFilter";
import Reserve from "../components/Reserve";
import Clear from "../components/Clear";

export default function CatalogApartamentsPage() {
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
                  Квартиры
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <section className="catalog-filters">
          <div className="catalog-filters__container">
            <div className="catalog-filters__title title">Каталог квартир</div>
            <form action="#" className="catalog-filters__body">
              <ComplexFilter />
              <RoomsFilter />
              <AreaSelector minValue={20} maxValue={100} />
              <PriceFilter minValue={5000000} maxValue={10000000} />
              <TimeFilter />
              <LocationFilter />
              <FloorFilter minValue={0} maxValue={15} />
              <EntranceFilter />
              <Reserve title={"Квартиры без брони"} />
              <Clear />
              <ButtonWatch title={"Смотреть 530 квартир"} />
            </form>
            <ButtonFilters />
          </div>
        </section>
        <Table />
      </main>
      <Footer />
    </div>
  );
}

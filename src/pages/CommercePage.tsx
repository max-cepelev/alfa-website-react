import Footer from "../blocks/Footer";
import Header from "../blocks/Header";
import AreaSelector from "../components/filters/AreaSelector";
import ButtonWatch from "../components/ButtonWatch";
import ButtonMore from "../components/ButtonMore/index";
import ButtonFilters from "../components/ButtonFilters";
import PriceFilter from "../components/filters/PriceFilter";
import LocationCommerceFilter from "../components/filters/LocationCommerceFilter";
import ComplexFilter from "../components/filters/ComplexFilter";
import TimeFilter from "../components/filters/TimeFilter";
import Reserve from "../components/Reserve";
import Clear from "../components/Clear";

export default function CommercePage() {
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
                  Коммерция
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <section className="commerce-filters">
          <div className="commerce-filters__container">
            <div className="commerce-filters__title title">коммерция</div>
            <form action="#" className="commerce-filters__body">
              <div className="commerce-filters__top">
                <ComplexFilter />
                <LocationCommerceFilter />
                <AreaSelector minValue={20} maxValue={100} />
                <PriceFilter minValue={5000000} maxValue={10000000} />
                <TimeFilter />
              </div>
              <div className="commerce-filters__setting">
                <Reserve title={"Помещения без брони"} />
                <Clear />
              </div>
              <div className="commerce-filters__button">
                <ButtonWatch title={"Смотреть 10 помещений"} />
              </div>
            </form>
            <ButtonFilters />
          </div>
        </section>
        <section className="table-commerce">
          <div className="table-commerce__container">
            <div className="table-commerce__content">
              <ul className="table-commerce__header table-commerce-header">
                <li className="table-commerce-header__item">Схема</li>
                <li className="table-commerce-header__item">Жилой комплекс</li>
                <li className="table-commerce-header__item">Подъезд</li>
                <li className="table-commerce-header__item _icon-arrow">
                  Этаж
                </li>
                <li className="table-commerce-header__item _icon-arrow">
                  Площадь
                </li>
                <li className="table-commerce-header__item _icon-arrow">
                  Цена за м2
                </li>
                <li className="table-commerce-header__item _icon-arrow">
                  Стоимость
                </li>
                <li className="table-commerce-header__item">Статус</li>
              </ul>
              <div className="table-commerce__body table-commerce-body">
                <ul className="table-commerce-body__row">
                  <li className="table-commerce-body__item">
                    <img src="img/catalog-apartaments/image 3.png" alt="" />
                  </li>
                  <li className="table-commerce-body__item">Дом Гавань</li>
                  <li className="table-commerce-body__item">
                    <div>1</div>
                  </li>
                  <li className="table-commerce-body__item">
                    10 <span>из 20</span>
                    <span>этаж</span>
                  </li>
                  <li className="table-commerce-body__item">
                    43.5 м2 <span>,</span>
                  </li>
                  <li className="table-commerce-body__item">15 000 ₽/м2</li>
                  <li className="table-commerce-body__item">2 500 000 ₽</li>
                  <li className="table-commerce-body__item">Свободно</li>
                </ul>
                <ul className="table-commerce-body__row">
                  <li className="table-commerce-body__item">
                    <img src="img/catalog-apartaments/image 3.png" alt="" />
                  </li>
                  <li className="table-commerce-body__item">Дом Гавань</li>
                  <li className="table-commerce-body__item">
                    <div>1</div>
                  </li>
                  <li className="table-commerce-body__item">
                    10 <span>из 20</span>
                    <span>этаж</span>
                  </li>
                  <li className="table-commerce-body__item">
                    43.5 м2 <span>,</span>
                  </li>
                  <li className="table-commerce-body__item">15 000 ₽/м2</li>
                  <li className="table-commerce-body__item">2 500 000 ₽</li>
                  <li className="table-commerce-body__item">Свободно</li>
                </ul>
                <ul className="table-commerce-body__row">
                  <li className="table-commerce-body__item">
                    <img src="img/catalog-apartaments/image 3.png" alt="" />
                  </li>
                  <li className="table-commerce-body__item">Дом Гавань</li>
                  <li className="table-commerce-body__item">
                    <div>1</div>
                  </li>
                  <li className="table-commerce-body__item">
                    10 <span>из 20</span>
                    <span>этаж</span>
                  </li>
                  <li className="table-commerce-body__item">
                    43.5 м2 <span>,</span>
                  </li>
                  <li className="table-commerce-body__item">15 000 ₽/м2</li>
                  <li className="table-commerce-body__item">2 500 000 ₽</li>
                  <li className="table-commerce-body__item">Свободно</li>
                </ul>
                <ul className="table-commerce-body__row">
                  <li className="table-commerce-body__item">
                    <img src="img/catalog-apartaments/image 3.png" alt="" />
                  </li>
                  <li className="table-commerce-body__item">Дом Гавань</li>
                  <li className="table-commerce-body__item">
                    <div>1</div>
                  </li>
                  <li className="table-commerce-body__item">
                    10 <span>из 20</span>
                    <span>этаж</span>
                  </li>
                  <li className="table-commerce-body__item">
                    43.5 м2 <span>,</span>
                  </li>
                  <li className="table-commerce-body__item">15 000 ₽/м2</li>
                  <li className="table-commerce-body__item">2 500 000 ₽</li>
                  <li className="table-commerce-body__item">Свободно</li>
                </ul>
                <ul className="table-commerce-body__row">
                  <li className="table-commerce-body__item">
                    <img src="img/catalog-apartaments/image 3.png" alt="" />
                  </li>
                  <li className="table-commerce-body__item">Дом Гавань</li>
                  <li className="table-commerce-body__item">
                    <div>1</div>
                  </li>
                  <li className="table-commerce-body__item">
                    10 <span>из 20</span>
                    <span>этаж</span>
                  </li>
                  <li className="table-commerce-body__item">
                    43.5 м2 <span>,</span>
                  </li>
                  <li className="table-commerce-body__item">15 000 ₽/м2</li>
                  <li className="table-commerce-body__item">2 500 000 ₽</li>
                  <li className="table-commerce-body__item">Свободно</li>
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

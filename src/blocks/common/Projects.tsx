import React, { useEffect, useState } from "react";
import ButtonMore from "../../components/ButtonMore";
import ButtonWatch from "../../components/ButtonWatch";
import ButtonFilters from "../../components/ButtonFilters";
import PriceFilter from "../../components/filters/PriceFilter";
import LocationFilter from "../../components/filters/LocationFilter";
import RoomsFilter from "../../components/filters/RoomsFilter";
import TimeFilter from "../../components/filters/TimeFilter";
import getJsonData from "../../helpers/getJsonData";
import { IProperty } from "../../interfaces/Property";

export default function Projects() {
  const [data, setData] = useState<IProperty[] | null>(null);

  useEffect(() => {
    getJsonData("/properties.json").then((res: IProperty[]) => {
      setData(res);
    });
  }, []);

  return (
    <section className="projects">
      <div className="projects__container">
        <div className="projects__body">
          <div className="projects__title title">наши проекты</div>
          <form action="#" className="projects__filters projects-filters">
            <div className="projects-filters__title">выберите квартиру</div>
            <div className="projects-filters__body">
              <RoomsFilter />
              <LocationFilter />
              <PriceFilter minValue={5000000} maxValue={10000000} />
              <TimeFilter />
              <ButtonWatch title="Смотреть 530 квартир" />
            </div>
          </form>
          <div className="projects__actions projects-actions">
            <ButtonFilters />
            <ul className="projects-actions__list">
              <li className="projects-actions__item">
                <a href="#" className="projects-actions__link _active">
                  В продаже
                </a>
              </li>
              <li className="projects-actions__item">
                <a href="#" className="projects-actions__link">
                  Строящиеся
                </a>
              </li>
              <li className="projects-actions__item">
                <a href="#" className="projects-actions__link">
                  Построенные
                </a>
              </li>
              <li className="projects-actions__item">
                <a href="#" className="projects-actions__link">
                  Перспективные
                </a>
              </li>
            </ul>
            <div className="projects-actions__sorts">
              <button className="projects-actions__tile _icon-tile _active">
                Плитка
              </button>
              <button className="projects-actions__map _icon-map">
                На карте
              </button>
            </div>
          </div>
          <div className="projects__items projects-items">
            {data &&
              data.map((item) => (
                <a key={item.id} href="#" className="projects-items__item">
                  <div className="projects-items__image">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="projects-items__info">
                    <div className="projects-items__name">{item.name}</div>
                    <div className="projects-items__price">
                      от {item.price.toLocaleString("ru-RU")} млн/₽
                    </div>
                    <div className="projects-items__location _icon-map">
                      {item.address}
                    </div>
                    <div className="projects-items__deadline">
                      {item.commissioningDate}
                    </div>
                  </div>
                  <button type="submit" className="projects-items__button">
                    квартир {item.flatsNumber}
                  </button>
                </a>
              ))}
          </div>
          <ButtonMore title="Посмотреть еще проекты" />
        </div>
      </div>
    </section>
  );
}

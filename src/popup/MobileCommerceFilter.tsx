import PriceFilter from "../components/filters/PriceFilter";
import LocationFilter from "../components/filters/LocationFilter";
import ComplexFilter from "../components/filters/ComplexFilter";
import TimeFilter from "../components/filters/TimeFilter";
import Reserve from "../components/Reserve";
import Clear from "../components/Clear";
import AreaSelector from "../components/filters/AreaSelector";
import ButtonWatch from "../components/ButtonWatch";

export default function MobileCommerceFilter() {
  return (
    <section className="mobile-commerce-filters">
      <div className="mobile-commerce-filters__body">
        <div className="mobile-commerce-filters__title _icon-close1">
          Фильтры
        </div>
        <form action="#" className="mobile-commerce-filters__filters">
          <ComplexFilter />
          <AreaSelector minValue={20} maxValue={100} />
          <PriceFilter minValue={5000000} maxValue={10000000} />
          <TimeFilter />
          <LocationFilter />
          <Reserve title="Помещения без брони" />
          <Clear />
          <ButtonWatch title="Смотреть 10 помещений" />
        </form>
      </div>
    </section>
  );
}

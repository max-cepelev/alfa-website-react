import AreaSelector from "../components/filters/AreaSelector";
import ButtonWatch from "../components/ButtonWatch";
import FloorFilter from "../components/filters/FloorFilter";
import EntranceFilter from "../components/filters/EntranceFilter";
import PriceFilter from "../components/filters/PriceFilter";
import LocationFilter from "../components/filters/LocationFilter";
import RoomsFilter from "../components/filters/RoomsFilter";
import ComplexFilter from "../components/filters/ComplexFilter";
import TimeFilter from "../components/filters/TimeFilter";
import Reserve from "../components/Reserve";
import Clear from "../components/Clear";

export default function MobileFilter() {
  return (
    <section className="mobile-filters">
      <div className="mobile-filters__body">
        <div className="mobile-filters__title _icon-close1">Фильтры</div>
        <form action="#" className="mobile-filters__filters">
          <ComplexFilter />
          <RoomsFilter />
          <AreaSelector minValue={20} maxValue={100} />
          <PriceFilter minValue={5000000} maxValue={10000000} />
          <TimeFilter />
          <LocationFilter />
          <FloorFilter minValue={0} maxValue={15} />
          <EntranceFilter />
          <div className="mobile-filters__setting">
            <Reserve title={"Квартиры без брони"} />
            <Clear />
          </div>
          <ButtonWatch title={"Смотреть 530 квартир"} />
        </form>
      </div>
    </section>
  );
}

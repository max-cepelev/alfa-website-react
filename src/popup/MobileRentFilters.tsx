import AreaSelector from "../components/filters/AreaSelector";
import ButtonWatch from "../components/ButtonWatch";
import PriceFilter from "../components/filters/PriceFilter";
import LocationFilter from "../components/filters/LocationFilter";
import ComplexFilter from "../components/filters/ComplexFilter";
import FloorFilter from "../components/filters/FloorFilter";
import EntranceFilter from "../components/filters/EntranceFilter";
import RoomTypeFilter from "../components/filters/RoomTypeFilter";
import Clear from "../components/Clear";

export default function MobileRentFilter() {
  return (
    <section className="mobile-rent-filters">
      <div className="mobile-rent-filters__body">
        <div className="mobile-rent-filters__title _icon-close1">Фильтры</div>
        <form action="#" className="mobile-rent-filters__filters">
          <ComplexFilter />
          <RoomTypeFilter />
          <AreaSelector minValue={20} maxValue={100} />
          <PriceFilter minValue={5000000} maxValue={10000000} />
          <LocationFilter />
          <FloorFilter minValue={0} maxValue={15} />
          <EntranceFilter />
          <Clear />
          <ButtonWatch title={"Смотреть 10 помещений"} />
        </form>
      </div>
    </section>
  );
}

import Multiselect from "multiselect-react-dropdown";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { filterActions } from "../../store/reducers/FilterSlice";

interface Option {
  id: number;
  name: string;
}

const options = [
  {
    id: 6,
    name: "Дзержинский",
  },
  {
    id: 3,
    name: "Индустриальный",
  },
  {
    id: 5,
    name: "Кировский",
  },
  {
    id: 2,
    name: "Ленинский",
  },
  {
    id: 1,
    name: "Мотовилихинский",
  },
  {
    id: 7,
    name: "Орджоникидзевский",
  },
  {
    id: 8,
    name: "Пермский",
  },
  {
    id: 4,
    name: "Свердловский",
  },
];

export default function LocationFilter() {
  const [areas, setAreas] = useState<Option[]>([]);

  const dispatch = useAppDispatch();
  const { setAreaIds } = filterActions;
  const { areaIds } = useAppSelector((store) => store.filterReducer);

  const handleChange = (selectedList: Option[], selectedItem: Option) => {
    dispatch(setAreaIds(selectedList.map((item) => item.id)));
  };

  useEffect(() => {
    setAreas(
      areaIds ? options.filter((item) => areaIds.includes(item.id)) : []
    );
  }, [areaIds]);

  return (
    <Multiselect
      selectedValues={areas}
      onSelect={handleChange}
      onRemove={handleChange}
      displayValue="name"
      className="location-filter"
      hideSelectedList
      placeholder="выбрать район"
      emptyRecordMsg="пусто"
      // onKeyPressFn={function noRefCheck() {}}
      // onRemove={function noRefCheck() {}}
      // onSearch={function noRefCheck() {}}
      // onSelect={function noRefCheck() {}}
      options={options}
      showCheckbox
    />
  );
}

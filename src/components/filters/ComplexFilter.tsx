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
    name: "Таун-хаус",
  },
  {
    id: 3,
    name: "Дом Скворцы",
  },
  {
    id: 5,
    name: "Дом Hygge",
  },
  {
    id: 2,
    name: "Дом Гавань",
  },
  {
    id: 1,
    name: "Дом Танго",
  },
  {
    id: 4,
    name: "Дом Олимп",
  },
];

export default function ComplexFilter() {
  const [complexes, setComplexes] = useState<Option[]>([]);

  const dispatch = useAppDispatch();
  const { setComplesIds } = filterActions;
  const { complexIds } = useAppSelector((store) => store.filterReducer);

  const handleChange = (selectedList: Option[], selectedItem: Option) => {
    dispatch(setComplesIds(selectedList.map((item) => item.id)));
  };

  useEffect(() => {
    setComplexes(
      complexIds ? options.filter((item) => complexIds.includes(item.id)) : []
    );
  }, [complexIds]);

  return (
    <Multiselect
      selectedValues={complexes}
      onSelect={handleChange}
      onRemove={handleChange}
      displayValue="name"
      className="complex-filter"
      hideSelectedList
      placeholder="не важно"
      options={options}
      showCheckbox
    />
  );
}

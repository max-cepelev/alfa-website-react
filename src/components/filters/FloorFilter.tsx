import { Slider } from "antd";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { filterActions } from "../../store/reducers/FilterSlice";

interface Props {
  minValue: number;
  maxValue: number;
}

export default function FloorFilter({ minValue, maxValue }: Props) {
  const { minFloor, maxFloor } = useAppSelector((store) => store.filterReducer);
  const dispatch = useAppDispatch();
  const { setMaxFloor, setMinFloor } = filterActions;

  const [minVal, setMinVal] = useState(minValue);
  const [maxVal, setMaxVal] = useState(maxValue);

  const handleChange = (value: [number, number]) => {
    setMinVal(value[0]);
    setMaxVal(value[1]);
  };

  const handleConfirm = (value: [number, number]) => {
    dispatch(setMinFloor(value[0]));
    dispatch(setMaxFloor(value[1]));
  };

  useEffect(() => {
    setMinVal(minFloor ? minFloor : minValue);
    setMaxVal(maxFloor ? maxFloor : maxValue);
  }, [minFloor, maxFloor]);

  return (
    <div className="filter-floor filter">
      <div className="filter-floor__body">
        <span>Этаж от</span>
        <div className="filter-floor__input">{minVal}</div>
        <span>до</span>
        <div className="filter-floor__input">{maxVal}</div>
        <Slider
          range
          min={minValue}
          max={maxValue}
          // defaultValue={[minVal, maxVal]}
          value={[minVal, maxVal]}
          onChange={handleChange}
          onAfterChange={handleConfirm}
          tooltipVisible={false}
        />
      </div>
    </div>
  );
}

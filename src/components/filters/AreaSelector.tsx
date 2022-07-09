import React, { useEffect, useState } from "react";
import { Slider } from "antd";
import { filterActions } from "../../store/reducers/FilterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

interface Props {
  minValue: number;
  maxValue: number;
}

export default function AreaFilter({ minValue, maxValue }: Props) {
  const { minArea, maxArea } = useAppSelector((store) => store.filterReducer);
  const dispatch = useAppDispatch();
  const { setMaxArea, setMinArea } = filterActions;

  const [minVal, setMinVal] = useState(minValue);
  const [maxVal, setMaxVal] = useState(maxValue);

  const handleChange = (value: [number, number]) => {
    setMinVal(value[0]);
    setMaxVal(value[1]);
  };

  const handleConfirm = (value: [number, number]) => {
    dispatch(setMinArea(value[0]));
    dispatch(setMaxArea(value[1]));
  };

  useEffect(() => {
    setMinVal(minArea ? minArea : minValue);
    setMaxVal(maxArea ? maxArea : maxValue);
  }, [minArea, maxArea]);
  return (
    <div className="filter-area filter">
      <div className="filter-area__body">
        <span>Площадь от</span>
        <div className="filter-area__input">{minVal}</div>
        <span>до</span>
        <div className="filter-area__input">{maxVal}</div>
        <span>м2</span>
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

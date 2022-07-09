import React, { useEffect, useState } from "react";
import { Slider } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { filterActions } from "../../store/reducers/FilterSlice";

interface Props {
  minValue: number;
  maxValue: number;
}

export default function PriceFilter({ minValue, maxValue }: Props) {
  const { minPrice, maxPrice } = useAppSelector((store) => store.filterReducer);
  const dispatch = useAppDispatch();
  const { setMaxPrice, setMinPrice } = filterActions;

  const [minVal, setMinVal] = useState(minValue);
  const [maxVal, setMaxVal] = useState(maxValue);

  const handleChange = (value: [number, number]) => {
    setMinVal(value[0]);
    setMaxVal(value[1]);
  };

  const handleConfirm = (value: [number, number]) => {
    dispatch(setMinPrice(value[0]));
    dispatch(setMaxPrice(value[1]));
  };

  useEffect(() => {
    setMinVal(minPrice ? minPrice : minValue);
    setMaxVal(maxPrice ? maxPrice : maxValue);
  }, [minPrice, maxPrice]);

  return (
    <div className="filter-price filter">
      <div className="filter-price__body">
        <span>Цена от</span>
        <div className="filter-price__input">{minVal}</div>
        <span>до</span>
        <div className="filter-price__input">{maxVal}</div>
        <span>₽</span>
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

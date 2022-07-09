import React from "react";
import { useAppDispatch } from "../hooks/redux";
import { filterActions } from "../store/reducers/FilterSlice";

export default function Clean() {
  const { reset } = filterActions;
  const dispatch = useAppDispatch();
  return (
    <div onClick={() => dispatch(reset())} className="clean _icon-close1">
      Сбросить фильтр
    </div>
  );
}

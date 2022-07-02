import React from 'react'
import { Slider } from 'antd'

export default function PriceFilter() {
  return (
    <div className="filter-price filter">
      <span>Цена от</span>
      <input value="6 000 000" className="filter-price__input" type="tel" />
      <span>до</span>
      <input value="15 000 000" className="filter-price__input" type="tel" />
      <span>₽</span>
      <Slider range defaultValue={[0, 100]} />
    </div>
  )
}

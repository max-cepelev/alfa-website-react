import React, { useState } from 'react'

const filters = [
  {
    id: 'r_1',
    name: 'Ст',
    value: 1,
  },
  {
    id: 'r_2',
    name: '1к',
    value: 2,
  },
  {
    id: 'r_3',
    name: '2к',
    value: 3,
  },
  {
    id: 'r_4',
    name: '3к',
    value: 4,
  },
  {
    id: 'r_5',
    name: '4к+',
    value: 5,
  },
]

export default function RoomsFilter() {
  const [filter, setFilter] = useState<number[]>([])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e
    filter.includes(+value)
      ? setFilter(filter.filter((item) => item == +value))
      : setFilter([...filter, +value])
  }

  return (
    <div className="filter-rooms filter">
      {filters.map((item) => (
        <div key={item.id} className="filter-rooms__room">
          <input
            id={item.id}
            className="filter-room__input"
            type="checkbox"
            name={item.id}
            // checked={filter == item.value ? true : false}
            onChange={handleChange}
            value={item.value}
          />
          <label htmlFor={item.id} className="filter-room__label">
            {item.name}
          </label>
        </div>
      ))}
    </div>
  )
}

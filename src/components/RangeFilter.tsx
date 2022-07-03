import React, { useEffect, useState } from 'react'
import { Slider } from 'antd'

interface Props {
  name: string
  minValue: number
  maxValue: number
  valueFrom: number | null
  valueTo: number | null
  onChange: (valueFrom: number, valueTo: number) => void
  className: string
  unit?: string
}

export default function RangeFilter({
  name,
  minValue,
  maxValue,
  valueFrom,
  valueTo,
  onChange,
  className,
  unit = '',
}: Props) {
  const [minVal, setMinVal] = useState(minValue)
  const [maxVal, setMaxVal] = useState(maxValue)

  const handleChange = (value: [number, number]) => {
    setMinVal(value[0])
    setMaxVal(value[1])
  }

  const handleConfirm = (value: [number, number]) => {
    onChange(value[0], value[1])
  }

  useEffect(() => {
    valueFrom && setMinVal(valueFrom)
    valueTo && setMaxVal(valueTo)
  }, [valueFrom, valueTo])

  return (
    <div className={`${className} filter`}>
      <div className={`${className}__body`}>
        <span>{name} от</span>
        <div className={`${className}__input`}>{minVal}</div>
        <span>до</span>
        <div className={`${className}__input`}>{maxVal}</div>
        <span>{unit}</span>
        <Slider
          range
          min={minValue}
          max={maxValue}
          // defaultValue={[minValue, maxValue]}
          value={[minVal, maxVal]}
          onChange={handleChange}
          onAfterChange={handleConfirm}
          tooltipVisible={false}
        />
      </div>
    </div>
  )
}

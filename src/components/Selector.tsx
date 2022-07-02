import React, { useState } from 'react'
import Select, { ActionMeta, MultiValue } from 'react-select'

interface Option {
  id: number
  name: string
}

interface Props {
  options: readonly Option[]
  currentValue: readonly Option[]
  onChange: (
    newValue: readonly Option[],
    actionMeta: ActionMeta<Option>
  ) => void
}

export default function Selector({ options, onChange, currentValue }: Props) {
  return (
    <Select
      isMulti
      value={currentValue}
      name="Районы"
      options={options}
      className="basic-multi-select"
      // classNamePrefix="select"
      onChange={onChange}
    />
  )
}

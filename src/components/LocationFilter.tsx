import Multiselect from 'multiselect-react-dropdown'

interface Option {
  id: number
  name: string
}

interface Props {
  options: Option[]
  selectedValues: Option[]
  onChange: (options: Option[]) => void
}

export default function LocationFilter({
  options,
  selectedValues,
  onChange,
}: Props) {
  const handleChange = (selectedList: any, selectedItem: any) => {
    onChange(selectedList)
  }
  return (
    <Multiselect
      selectedValues={selectedValues}
      onSelect={handleChange}
      onRemove={handleChange}
      displayValue="name"
      className="filter"
      hideSelectedList
      placeholder="выбрать район"
      // onKeyPressFn={function noRefCheck() {}}
      // onRemove={function noRefCheck() {}}
      // onSearch={function noRefCheck() {}}
      // onSelect={function noRefCheck() {}}
      options={options}
      showCheckbox
    />
  )
}

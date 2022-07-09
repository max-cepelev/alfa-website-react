import Multiselect from 'multiselect-react-dropdown';

export default function RoomTypeFilter() {
   return (
      <Multiselect
         displayValue="key"
         className="room-type-filter"
         hideSelectedList
         placeholder="выбрать"
         onKeyPressFn={function noRefCheck() {}}
         onRemove={function noRefCheck() {}}
         onSearch={function noRefCheck() {}}
         onSelect={function noRefCheck() {}}
         options={[
            {
               key: 'Свободного назначения',
            },
            {
               key: 'Площадь',
            },
            {
               key: 'Офис',
            },
         ]}
         showCheckbox
      />
   );
}

import Multiselect from 'multiselect-react-dropdown';

export default function LocationCommerceFilter() {
   return (
      <Multiselect
         displayValue="key"
         className="location-commerce-filter"
         hideSelectedList
         placeholder="выбрать"
         onKeyPressFn={function noRefCheck() {}}
         onRemove={function noRefCheck() {}}
         onSearch={function noRefCheck() {}}
         onSelect={function noRefCheck() {}}
         options={[
            {
               key: 'Мотовилихинский',
            },
            {
               key: 'Ленинский',
            },
            {
               key: 'Индустриальный',
            },
            {
               key: 'Свердловский',
            },
            {
               key: 'Кировский',
            },
            {
               key: 'Дзержинский',
            },
            {
               key: 'Орджоникидзевский',
            },
            {
               key: 'Пермский',
            },
         ]}
         showCheckbox
      />
   );
}

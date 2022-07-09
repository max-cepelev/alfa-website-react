import Multiselect from 'multiselect-react-dropdown';

export default function EntranceFilter() {
   return (
      <Multiselect
         displayValue="key"
         className="entrance-filter"
         hideSelectedList
         placeholder="выбрать"
         onKeyPressFn={function noRefCheck() {}}
         onRemove={function noRefCheck() {}}
         onSearch={function noRefCheck() {}}
         onSelect={function noRefCheck() {}}
         options={[
            {
               key: '1',
            },
            {
               key: '2',
            },
            {
               key: '3',
            },
         ]}
         showCheckbox
      />
   );
}

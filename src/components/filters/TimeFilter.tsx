import React from 'react';
import Multiselect from 'multiselect-react-dropdown';

export default function TimeFilter() {
   return (
      <Multiselect
         displayValue="key"
         className="time-filter"
         hideSelectedList
         onKeyPressFn={function noRefCheck() {}}
         onRemove={function noRefCheck() {}}
         onSearch={function noRefCheck() {}}
         onSelect={function noRefCheck() {}}
         options={[
            {
               key: 'Не важно',
            },
            {
               key: 'Сдан',
            },
            {
               key: 'II кв. 2022 г',
            },
            {
               key: 'III кв. 2022 г.',
            },
            {
               key: 'IV кв. 2022 г.',
            },
            {
               key: 'I кв. 2023 г.',
            },
            {
               key: 'II кв. 2023 г',
            },
            {
               key: 'III кв. 2023 г.',
            },
            {
               key: 'IV кв. 2023 г.',
            },
            {
               key: 'I кв. 2024 г.',
            },
            {
               key: 'II кв. 2024 г',
            },
            {
               key: 'III кв. 2024 г.',
            },
            {
               key: 'IV кв. 2024 г.',
            },
         ]}
         showCheckbox
      />
   );
}

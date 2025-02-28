import { useState } from 'react';
import {  Combobox, useCombobox } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const opt = ['Relevance', 'Most Recent',  'Salary (Low to High)', 'Salary (High to Low)'];

function Sort() {
  const [selectedItem, setSelectedItem] = useState<string | null>('Relevance');
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className='text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (

     

      <Combobox
        store={combobox}
        width={200}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }} 
      >
        <Combobox.Target>
        
          <div onClick={() => combobox.toggleDropdown()}
           className='cursor-pointer border border-bright-sun-400  flex px-2 py-1 rounded-xl items-center gap-1'>
            {
                 selectedItem
            } <IconAdjustments className='text-bright-sun-300 h-5 w-5'/>
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
   
  );
}

export default Sort;
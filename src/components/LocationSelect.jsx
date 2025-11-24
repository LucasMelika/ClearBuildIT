import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/24/solid';

const options = [
  { id: 'alle', label: 'Alle' },
  { id: 'amsterdam', label: 'Amsterdam' },
  { id: 'rotterdam', label: 'Rotterdam' },
  { id: 'utrecht', label: 'Utrecht' }
];

export default function LocationSelect() {
  const [selected, setSelected] = React.useState(options[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative w-28">
        <Listbox.Button className="flex w-full items-center justify-between gap-1 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm font-medium shadow-sm hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
          <span>{selected.label}</span>
          <ChevronUpDownIcon className="h-4 w-4 text-neutral-500" />
        </Listbox.Button>
        <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
          <Listbox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-neutral-200 bg-white py-1 text-sm shadow-lg focus:outline-none">
            {options.map(opt => (
              <Listbox.Option
                key={opt.id}
                value={opt}
                className={({ active }) => `flex cursor-pointer select-none items-center gap-2 px-3 py-2 ${active ? 'bg-neutral-100' : ''}`}
              >
                {({ selected }) => (
                  <>
                    <span className={`flex-1 ${selected ? 'font-semibold' : 'font-medium'}`}>{opt.label}</span>
                    {selected && <CheckIcon className="h-4 w-4 text-brand-600" />}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}

// native
import { Fragment, useEffect, useState } from 'react';

// routing
import { useSubmit, useLoaderData } from 'react-router-dom';

// components
import { Listbox, Transition } from '@headlessui/react';
import { BsChevronExpand } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

export default function Example({
  options,
  queryName,
  placeholder = 'Select',
}) {
  const submit = useSubmit();
  const { params } = useLoaderData();
  const [selected, setSelected] = useState({ value: placeholder });

  const search = (e) => {
    submit(
      {
        ...(params[queryName] ? { [queryName]: params[queryName] } : {}),
        [queryName]: e.value,
      },
      { replace: false },
    );
  };

  useEffect(() => {
    if (params[queryName]) {
      setSelected(options.find(({ value }) => value === params[queryName]));
    } else {
      setSelected({ value: placeholder });
    }
  }, [params[queryName]]);

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={search}>
        <div className="relative">
          <Listbox.Button className="custom-input text-start capitalize">
            <div className="flex items-center gap-2">
              {selected.Icon && (
                <selected.Icon size={18} className="text-secondary" />
              )}
              <span>{selected.value}</span>
            </div>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <BsChevronExpand size={22} className="text-primary" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-primary text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map(({ value, Icon }) => (
                <Listbox.Option
                  key={value}
                  className={({ active }) => `relative select-none py-2 pl-10 pr-4 capitalize ${
                    active
                      ? 'bg-secondary text-primary-white'
                      : 'text-primary'
                  }`}
                  value={{ value, Icon }}
                >
                  {({ selected: isSelected, active }) => (
                    <div className="flex gap-4 items-center">
                      {isSelected ? (
                        <AiOutlineCheck size={22} className="text-teal-500" />
                      ) : (
                        Icon && (
                          <Icon
                            size={18}
                            className={`${
                              active ? 'text-primary-white' : 'text-secondary'
                            }`}
                          />
                        )
                      )}

                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {value}
                      </span>
                    </div>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

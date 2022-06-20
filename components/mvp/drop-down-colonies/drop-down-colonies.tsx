/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const colony = [
  {
    id: 1,
    title: 'NEST',
    logo: '',
  },
  {
    id: 2,
    title: 'PERSIAN EMPIRE',
    logo: '',
  },
  {
    id: 3,
    title: 'VIKING MOUNTAINS',
    logo: '',
  },
  {
    id: 4,
    title: 'SAMURAI LANDS',
    logo: '',
  },
  {
    id: 5,
    title: 'SCIENTIST OUTPOST',
    logo: '',
  },
  {
    id: 6,
    title: 'SORCERER HIDEOUT',
    logo: '',
  },
  {
    id: 7,
    title: 'SPIRIT HOTSPOT',
    logo: '',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDownColonies() {
  const [selected, setSelected] = useState(colony[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="mt-10 relative">
            <Listbox.Button className="relative w-[402px] h-[45px] bg-dropdown pl-3 text-left text-sm">
              <span className="flex items-center">
                <span className="ml-3 block truncate">{selected.title}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-[402px] bg-dark-blue max-h-32 text-sm overflow-auto">
                {colony.map((colonies) => (
                  <Listbox.Option
                    key={colonies.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-dropdown' : 'text-white bg-dropdown',
                        'cursor-default select-none relative py-[10px] pl-3 pr-9 '
                      )
                    }
                    value={colonies}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames('ml-3 block truncate')}
                          >
                            {colonies.title}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-white',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}

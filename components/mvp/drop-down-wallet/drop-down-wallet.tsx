/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

const wallet = [
  {
    id: 1,
    title: 'Fractal',
    logo: 'https://www.fractal.is/favicon.ico',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDownWallet() {
  const [selected, setSelected] = useState(wallet[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="mt-5 relative">
            <Listbox.Button className="relative w-[402px] h-[45px] bg-dropdown pl-3 text-left text-sm">
              <span className="flex items-center">
                <img src={selected.logo} alt="" className="flex-shrink-0 h-6 w-6" />
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
                {wallet.map((wallets) => (
                  <Listbox.Option
                    key={wallets.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-dropdown' : 'text-white bg-dropdown',
                        'cursor-default select-none relative py-[10px] pl-3 pr-9 '
                      )
                    }
                    value={wallets}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img src={wallets.logo} alt="" className="flex-shrink-0 h-6 w-6" />
                          <span
                            className={classNames('ml-3 block truncate')}
                          >
                            {wallets.title}
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

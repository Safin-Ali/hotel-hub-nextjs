'use client'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { BsCheck } from 'react-icons/bs';
import styleListBox from './list-box-template.module.css';

interface PropsType {
    listValues: string[] | number[],
    clickBtnCompo: React.ReactElement
    item: string,
    handleListItem: (value: string) => void
};

export default function ListBoxTemplate({
    listValues,
    clickBtnCompo,
    item,
    handleListItem
}: PropsType) {

    return (
        <div>
            <Listbox value={ item } as={ Fragment } onChange={ handleListItem }>
                <div>
                    <Listbox.Button>
                        { clickBtnCompo }
                    </Listbox.Button>
                    <Transition
                        as={ Fragment }
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className={ styleListBox['list-options-container'] }>
                            { listValues.map((person, personIdx) => (
                                <Listbox.Option
                                    key={ personIdx }
                                    className={ ({ active, selected }) =>
                                        `${styleListBox['list-item']} ${active || selected ? styleListBox['list-item-active'] : 'text-gray-900'
                                        }`
                                    }
                                    value={ person }
                                >
                                    { ({ selected }) => (
                                        <>
                                            <span
                                                className={ `block truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }` }
                                            >
                                                { person }
                                            </span>
                                            { selected ? (
                                                <span className="absolute inset-0 flex items-center pl-3 text-pink-400">
                                                    <BsCheck className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null }
                                        </>
                                    ) }
                                </Listbox.Option>
                            )) }
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};
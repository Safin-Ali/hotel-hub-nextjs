import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import styleModal from './modal-template.module.css';
interface PropsType {
    children: React.ReactElement,
    closeModal: () => void,
    modalBool: boolean
};

export default function ModalTemplate({
    closeModal = () => { },
    children,
    modalBool = false
}: PropsType) {

    return (

        <>
            <Transition appear show={ modalBool } as={ Fragment }>
                <Dialog as={ 'div' } className="relative z-[200]" onClose={ closeModal }>
                    <Transition.Child
                        as={ Fragment }
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="modal-elm-container" />
                    </Transition.Child>

                    <div className={ styleModal['modal-blur-bg'] }>

                        <div className={ styleModal['modal-elm-container'] }>
                            <Transition.Child
                                as={ Fragment }
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className={ styleModal['modal-panel'] }>
                                    {
                                        children
                                    }
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>

                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
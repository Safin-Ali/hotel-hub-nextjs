'use client'
import React from 'react';
import { FcCalendar } from 'react-icons/fc';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa';
import PrimaryButton from '@/components/Button/Primary-Button';
import 'react-day-picker/dist/style.css';
import 'react-day-picker/dist/style.css';
import ModalTemplate from '@/components/Modal/Modal-Template';
import { DayPicker } from 'react-day-picker';
import useCheckInOut from '@/hooks/use-check-in-out';
import ListBoxTemplate from '@/components/ListBox/List-Box-Template';
import newArr from '@/utilities/new-arr';

export default function CheckoutSection() {

    const {
        fromMonth,
        handleCheckIn,
        handleCheckInBool,
        handleCheckOut,
        handleCheckOutBool,
        handleCheckReset,
        selectedDate,
        toMonth,
        handleCloseModal,
        ModalVal,
        handlePerson
    } = useCheckInOut();

    const person: string = `${selectedDate.person}`;

    const handleListItem = (value: string): void => handlePerson(value);

    return (
        <>
            <section className={ `sm:block hidden h-[120px] relative` }>

                <div className={ `shadow-lg absolute -top-[50%] rounded-lg z-[101] left-1/2 transform -translate-x-1/2 bg-white py-7 w-[95%] lg:w-[80%]` }>

                    <div className={ `grid sm:grid-cols-2 gap-y-5 md:grid-cols-4 justify-center items-center` }>

                        <div onClick={ handleCheckInBool } className={ `flex-full-center gap-5 border-r-4` }>
                            <div>
                                <FcCalendar size={ 40 } />
                            </div>
                            <div>
                                <h5 className={ `font-semibold text-sm md:text-base` }>
                                    CHECK IN
                                </h5>
                                <div className={ `flex-full-center cursor-pointer` }>
                                    <h6 className={ `font-medium` }>
                                        { selectedDate.checkIn }
                                    </h6>
                                    <RiArrowDropDownLine size={ 35 } />
                                </div>
                            </div>
                        </div>

                        <div onClick={ handleCheckOutBool } className={ `flex-full-center gap-5 border-r-4` }>
                            <div>
                                <FcCalendar size={ 40 } />
                            </div>
                            <div>
                                <h5 className={ `font-semibold text-sm md:text-base` }>
                                    CHECK OUT
                                </h5>
                                <div className={ `flex-full-center cursor-pointer` }>
                                    <h6 className={ `font-medium` }>
                                        { selectedDate.checkOut }
                                    </h6>
                                    <RiArrowDropDownLine size={ 35 } />
                                </div>
                            </div>
                        </div>

                        <div className={ `flex-full-center relative gap-5 border-r-4` }>
                            <div>
                                <FaUserAlt size={ 30 } color={ `#EC4899` } />
                            </div>

                            <ListBoxTemplate
                                handleListItem={ handleListItem }
                                item={ person }
                                listValues={ newArr<number>(7,true,true) }
                                clickBtnCompo={ <div className={`outline-none`}>
                                    <h5 className={ `font-semibold text-sm md:text-base` }>
                                        PERSON
                                    </h5>
                                    <div className={ `flex-full-center cursor-pointer` }>
                                        <h6 className={ `font-medium` }>
                                            { selectedDate.person }
                                        </h6>
                                        <RiArrowDropDownLine size={ 35 } />
                                    </div>
                                </div> }
                            />
                        </div>

                        <div className={ `flex-full-center gap-5` }>
                            <PrimaryButton padding={`sm:px-5 py-2  md:px-3 lg:px-5`} children={ `checkout` } />
                            <PrimaryButton padding={`sm:px-5 py-2  md:px-3 lg:px-5`} onClick={ handleCheckReset } children={ `reset` } />
                        </div>
                    </div>
                </div>

            </section>


            <ModalTemplate
                children={
                    <DayPicker
                        mode={ `single` }
                        fromMonth={ fromMonth }
                        toMonth={ toMonth }
                        onDayClick={ handleCheckIn }
                        disabled={ selectedDate.initialDisableDate }
                        required
                    />
                }
                closeModal={ handleCloseModal }
                modalBool={ ModalVal.checkInBool }
            />
            <ModalTemplate
                children={
                    <DayPicker
                        mode={ `single` }
                        fromMonth={ fromMonth }
                        toMonth={ toMonth }
                        onDayClick={ handleCheckOut }
                        disabled={ selectedDate.disableDate }
                        required
                    />
                }
                closeModal={ handleCloseModal }
                modalBool={ ModalVal.checkOutBool }
            />
        </>
    );
};
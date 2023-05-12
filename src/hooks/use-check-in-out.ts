import { useState } from 'react';
import { format, addDays, addMonths, startOfMonth, eachDayOfInterval, isToday } from 'date-fns';

interface ModalDataType {
    checkInBool: boolean,
    checkOutBool: boolean,
    personBool: boolean
};

interface SelectDateType {
    checkIn: string,
    checkOut: string,
    person: string,
    initialDisableDate: Date[],
    disableDate: Date[]
};

interface ReturnType {
    handleCheckIn: (date: Date) => void,
    handleCheckInBool: () => void,
    handleCheckOutBool: () => void,
    handleCheckOut: (date: Date) => void,
    handleCheckReset: () => void,
    toMonth: Date,
    fromMonth: Date,
    selectedDate: SelectDateType,
    handleCloseModal: () => void,
    handlePerson: (val:string) => void,
    ModalVal: ModalDataType
};

export default function useCheckInOut(): ReturnType {

    const [modalBool, setModalBool] = useState<ModalDataType>({
        checkInBool: false,
        checkOutBool: false,
        personBool: false
    });

    const todayDate = new Date();

    const fromMonth = new Date(todayDate.getFullYear(), todayDate.getMonth());

    const nextThreeDate = addDays(todayDate, 4);

    const toMonth = addMonths(todayDate, 1);

    // Get the start of the current month
    const startOfMonthDate = startOfMonth(new Date());

    // Get all the days of the current month up to today
    const daysOfMonth = eachDayOfInterval({ start: startOfMonthDate, end: new Date() });

    // Iterate over the array of dates and return array of prev days
    const initDisableDate = daysOfMonth.filter(date => !isToday(date));

    const [date, setDate] = useState<SelectDateType>({
        initialDisableDate: initDisableDate,
        disableDate: initDisableDate,
        checkIn: format(addDays(todayDate, 1), 'PP'),
        checkOut: format(nextThreeDate, 'PP'),
        person: '2'
    });

    const handleCloseModal = () => setModalBool({
        checkInBool: false,
        checkOutBool: false,
        personBool: false
    });

    const handleCheckIn = (day: Date) => {
        const startOfMonthDate = startOfMonth(new Date());
        const daysOfMonth = eachDayOfInterval({ start: startOfMonthDate, end: day });
        const disableDate = daysOfMonth.map(date => date);
        setDate({
            ...date,
            checkIn: format(day, 'PP'),
            disableDate
        });
        handleCloseModal();
    };

    const handleCheckReset = () => {
        setDate({
            disableDate: initDisableDate,
            initialDisableDate: initDisableDate,
            checkIn: format(addDays(todayDate, 1), 'PP'),
            checkOut: format(nextThreeDate, 'PP'),
            person: '2'
        })
    };

    const handleCheckOut = (day: Date) => {
        setDate({
            ...date,
            checkOut: format(day, 'PP'),
        });
        handleCloseModal();
    };

    const handlePerson = (val:string) => {
        setDate({
            ...date,
            person: val
        });
        handleCloseModal();
    };

    const handleCheckInBool = () => setModalBool({ ...modalBool, checkInBool: true, checkOutBool: false, personBool: false });

    const handleCheckOutBool = () => setModalBool({ ...modalBool, checkInBool: false, checkOutBool: true, personBool: false });

    return {
        handleCheckIn,
        handleCheckInBool,
        handleCheckOutBool,
        handleCheckOut,
        handleCheckReset,
        fromMonth,
        toMonth,
        selectedDate: date,
        handleCloseModal,
        ModalVal: modalBool,
        handlePerson
    };

};
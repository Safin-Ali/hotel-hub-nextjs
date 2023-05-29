'use client'
import Calender from '@/components/Calender/Calender';
import React from 'react';
import { format, addDays, addMonths, } from 'date-fns';

export default function CheckOut () {

    const todayDate = new Date();

    const fromMonth = new Date(todayDate.getFullYear(), todayDate.getMonth());

    const nextThreeDate = addDays(todayDate, 4);

    const toMonth = addMonths(todayDate, 1);

    const handleCalender = (value: string) => {

        console.log(value);


    }

 return (
    <div className={`bg-white-50 p-5 rounded-lg shadow-card`}>
        <Calender
        fromMonth={fromMonth}
        toMonth={toMonth}
        />
    </div>
  );
};
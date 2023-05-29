import React from 'react';
import styleHotel from './style.module.css';
import CheckOut from './Check-Out';
import HotelsSliders from './Hotels-Sliders';
import API from '@/utilities/fetch-data';
import { HotelsDataType } from '@/types/Hotel-Data-Type';

export default async function Page() {

  const hotelsData = await API.get<HotelsDataType[]>(`/hotels`,'no-cache');

  return (
    <>

      <section className={ `${styleHotel['hotel-section']}` }>

        {/* checkout calender area */ }

        <div className={ `w-[30%]` }>
          <CheckOut />
        </div>


        {/* card items area */ }
        <HotelsSliders hotelsData={hotelsData}/>
      </section>

    </>
  );
};
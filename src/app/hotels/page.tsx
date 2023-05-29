import React from 'react';
import styleHotel from './style.module.css';
import CheckOut from './Check-Out';
import HotelsSliders from './(Hotels-Data)/Hotels-Sliders';

async function getHotels() {
  const res = await fetch(`https://hotel-hub-server.vercel.app/hotels`,{
    cache:`no-cache`
  });

  if (!res.ok) {

    throw new Error('Failed to fetch data');
  }

  return res.json();
  ;
};

export default async function Page() {

  const hotelsData = await getHotels();

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
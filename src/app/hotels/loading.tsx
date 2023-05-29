import HotelCardSkeleton from '@/components/Skeleton/Hotel-Card-Skeleton';
import newArr from '@/utilities/new-arr';
import React from 'react';

export default function Loading() {

  return (

    <section className={`flex-full-center gap-10 fit-screen overflow-hidden`}>

      <div className={`w-[30%]`}>

        <div className={`skeleton-tone h-80 rounded-md`}>

        </div>

      </div>

      <div className={`w-[70%] flex-full-center gap-5`}>
        {
          newArr<number>(3).map(elm => <HotelCardSkeleton key={ elm } />)
        }
      </div>

    </section>

  );
};
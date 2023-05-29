import React from 'react';
import {BsImage } from 'react-icons/bs';
interface PropsType {};

export default function HotelCardSkeleton () {

 return (
    <div className={`hotel-card-skleton`}>
        <div className={`bg-gray-100 text-center rounded-md m-3 h-52`}>
            <BsImage size={50} className={`text-gray-300 flex mx-auto items-center h-full`}/>
        </div>
        <div className={`m-3`}>
            <div className={`w-full my-5 rounded h-5 skeleton-tone animate-pulse`}></div>
            <div className={`w-full my-5 rounded h-5 skeleton-tone animate-pulse`}></div>
        </div>
    </div>
  );
};
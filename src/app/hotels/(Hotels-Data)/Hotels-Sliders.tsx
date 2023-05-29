'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import HotelCard from '@/components/Card/Hotel-Card';
import continents from '@/data/world-continents';
import { HotelsDataType } from '@/types/Hotel-Data-Type';
interface PropsType {
    hotelsData: HotelsDataType[]
};

export default function HotelsSliders({ hotelsData }: PropsType) {

    return (
        <>
            <div className={ `w-[65%] h-full overflow-y-auto hide-scrollbar` }>
                {
                    continents.map((continent, id) => {

                        const matchedHotels = hotelsData.filter(hotel => hotel.continent === continent);

                        return <div key={ id }>
                            <h4 className={ `capitalize text-3xl font-bold my-3` }>{ continent }</h4>
                            {
                                !matchedHotels.length
                                    ?
                                    <p>no hotel found :(</p>
                                    :
                                    <Swiper
                                        slidesPerView={ 3 }
                                        spaceBetween={ 20 }
                                        navigation={ true }
                                        modules={ [Navigation] }
                                    >

                                        {
                                            matchedHotels.map(doc => <SwiperSlide key={ doc._id }>
                                                <HotelCard data={ doc } />
                                            </SwiperSlide>)
                                        }


                                    </Swiper>
                            }

                        </div>
                    })
                }
            </div>
        </>
    );
};
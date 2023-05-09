'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Navigation } from "swiper";
import headerSlideData from '@/data/carousel-slide';

export default function HeroSection() {


  return (
    <Swiper
      slidesPerView={ 1 }
      navigation={true}
      loop={ true }
      effect={ "fade" }
      autoplay={
        {
          delay: 3000,
        }
      }
      modules={ [EffectFade, Autoplay, Navigation] }
    >
      {
        headerSlideData.map(slide => (
          <SwiperSlide>
            <div
              style={
                {
                  backgroundImage: `linear-gradient(#00000090 100%, transparent),url('${slide.img}')`
                }
              }
              className={ `
                w-full
                h-screen
                bg-no-repeat
                bg-cover
                bg-center`
                }>
                  <div className={`flex items-center h-full justify-center`}>
                    <h1 className={`text-3xl text-white font-bold`}>{slide.headerText}</h1>
                  </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};
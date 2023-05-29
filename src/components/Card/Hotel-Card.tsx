'use client'
import { HotelsDataType } from '@/types/Hotel-Data-Type';
import Image from 'next/image';
import React, { useState } from 'react';
import { BsFillStarFill, BsBoxArrowUpRight, BsStarHalf } from 'react-icons/bs';
import { BiDumbbell, BiSwim } from 'react-icons/bi';
import { ImLocation2 } from 'react-icons/im';
import { TiWiFi } from 'react-icons/ti';
import { MdOutlineRestaurant } from 'react-icons/md';
import Badge from '../Badge/Badge';
import { useRouter } from 'next/navigation';
interface PropsType {
  data: HotelsDataType
};

export default function HotelCard({
  data
}: PropsType) {

  const [hotelNameBool, setHotelNameBool] = useState<boolean>(false)

  const {
    _id,
    features,
    hotelImg,
    location,
    name,
    rating,
    continent,
    country,
    flagLogo
  } = data;

  const countryLogoBG = { backgroundImage: `url('${flagLogo}')` };

  const {push} = useRouter();

  const handleNavigate = () => push(`/hotels/${_id}`)

  return (
    <figure onMouseOver={ () => setHotelNameBool(true) } onMouseOut={ () => setHotelNameBool(false) } className={ `hotel-card-fig` }>

      {/* hotel thumb */ }
      <div onClick={handleNavigate} className={ `relative overflow-hidden` }>
        <Image
          src={ hotelImg }
          alt={ `Hotel_${name}_Image` }
          width={ 600 }
          height={ 450 }
          className={ `rounded-t-md` }
        />

        {/* hotel name overlay */ }
        <div className={ `hotel-name ${hotelNameBool ? 'top-1/2' : ''}` }>
          <div className={ `flex-full-center hotel-overlay` }>
            <h4>{ name }</h4>
            <BsBoxArrowUpRight size={ 30 } className={ `flex-full-center` } />
          </div>
        </div>

        {/* Badge Trending */ }
        <span className={ `absolute top-5 right-2` }>
          <Badge rounded={ `rounded-full pr-4` }>
            🔥Hot
          </Badge>
        </span>

      </div>

      {/* hotel content */ }
      <div className={ `p-2` }>

        {/* hotel country with rating */ }
        <div className={ `flex-v-center justify-between` }>
          <div className={ `hotel-card-country` }>

            <span style={ countryLogoBG } className={ `hotel-card-country-logo` }>
            </span>
            <span className={ `block` }>{ country }</span>
          </div>

          <div className={ `flex-full-center gap-x-1` }>

            <div className={ `hotel-card-rating` }>
              <BsFillStarFill size={ 15 } />
              <BsFillStarFill size={ 15 } />
              <BsStarHalf size={ 15 } />
            </div>

            <div className={ `mt-1` }>
              <b>{ rating }</b>
            </div>

          </div>

        </div>

        {/* hotel location */ }
        <div className={ `flex-v-center gap-x-0.5` }>
          <div className={ `text-gray-800` }>
            <ImLocation2 />
          </div>
          <div>
            <address className={ `hotel-location` }>{ location }</address>
          </div>
        </div>

        {/* hotel features section */ }
        <div className={ `hotel-card-features-section` }>

          {
            features[3].value
            &&
            <div className={ `hotel-card-features bg-green-600` }>
              <TiWiFi size={ 20 } />
            </div>
          }

          {
            features[1].value
            &&
            <div className={ `hotel-card-features bg-amber-500` }>
              <MdOutlineRestaurant size={ 20 } />
            </div>
          }

          {
            features[2].value
            &&
            <div className={ `hotel-card-features bg-sky-500` }>
              <BiSwim size={ 20 } />
            </div>
          }

          {
            features[0].value
            &&
            <div className={ `hotel-card-features bg-slate-600` }>
              <BiDumbbell size={ 20 } />
            </div>
          }

        </div>
      </div>
    </figure>
  );
};
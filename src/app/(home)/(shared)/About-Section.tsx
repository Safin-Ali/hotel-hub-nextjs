import PrimaryButton from '@/components/Button/Primary-Button';
import React from 'react';

export default function AboutSection() {

    return (
        <section className={ `flex-v-center flex-col sm:flex-row container my-10` }>
            <div className={ `sm:basis-3/2 md:basis-1/2` }>
                <img className={ `w-full sm:w-5/6 md:w-4/5 lg:w-[70%] rounded-md mx-auto` } src="https://i.ibb.co/qgzyXL5/hotel-customer.jpg" alt="" />
            </div>
            <div className={ `mr-auto md:mx-auto` }>

                <h4 className={ `text-2xl my-5 uppercase font-medium` }>About us <span className={ `border-b-2 inline-block border-pink-500 h-1 w-24` }></span></h4>

                <h1 className={ `text-4xl my-5 leading-[45px] font-semibold` }>The Best holidays
                    <br />
                    start here!
                </h1>

                <p className={ `text-gray-500` }>No one rejects,dislikes or avoids pleasure itself,
                    <br />
                    because its pleasure, but because those who
                    <br />
                    do not know how to persue
                </p>

                <div className={ `my-5` }>
                    <PrimaryButton children={ `Read More` } />
                </div>

            </div>
        </section>
    );
};
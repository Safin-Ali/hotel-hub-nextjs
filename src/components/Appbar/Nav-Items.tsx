'use client'
import React, { useState } from 'react';
import navstyle from './navbar.module.css';
import Link from 'next/link';
import navItems from '@/data/navbar-item';
import { HiBars3 } from 'react-icons/hi2';
import PrimaryButton from '../Button/Primary-Button';


export default function NavbarItems() {

    const [expandNav, setNavExpand] = useState<boolean>(false);

    return (
        <>
            {/* nav routes */ }

            <div className={ `${navstyle['nav-res']} ${expandNav ? 'visible opacity-100' : 'invisible opacity-0 md:visible md:opacity-100'}` }>

                <ul className={ navstyle['nav-item-container'] }>
                    {
                        navItems.map((route, idx) => <>
                            <li key={ idx } className={ navstyle['nav-item'] }><Link href={ route.link }>{ route.name }</Link></li>
                        </>)
                    }
                </ul>

            </div>

            <div className={ `flex-full-center gap-5` }>

                {/* authenticate button */ }

                <div className={ `text-white gap-5` }>
                    <PrimaryButton padding={`px-2 py-1 md:px-5 md:py-2`} children={ 'Book Now' } />
                </div>

                {/* expand bar icon */ }

                <div onClick={() => setNavExpand(!expandNav)} className={ `cursor-pointer md:hidden` }>
                    <HiBars3 size={ 35 } color={ `${expandNav ? '#ec4899' : '#f1f2f3'}` } />
                </div>
            </div>

        </>
    );
};
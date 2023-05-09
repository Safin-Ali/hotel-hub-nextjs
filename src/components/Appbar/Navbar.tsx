import React from 'react';
import navstyle from './navbar.module.css';
import Link from 'next/link';
import NavbarItems from './Nav-Items';


export default function Navbar() {

    return (
        <header className={ `container absolute top-0 inset-x-0 z-[3]` }>
            <nav className={ navstyle['nav-container'] }>

                {/* Brand logo */ }
                <div className={ `w-[150px] invert` }>
                    <Link href={ `/` } > <img className={ `w-full` } src="https://svgshare.com/i/svM.svg" alt="Brand-Logo" /> </Link>
                </div>

                {/* nav container */}

                <NavbarItems/>

            </nav>
        </header>
    );
};
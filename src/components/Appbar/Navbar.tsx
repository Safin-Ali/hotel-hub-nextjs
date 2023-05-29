import React from 'react';
import navstyle from './navbar.module.css';
import Link from 'next/link';
import NavbarItems from './Nav-Items';

export interface PropsType {
    position: `sticky` | 'absolute' | 'fixed',
    className: string,
    color: string,
    logoColor: `invert` | ''
};


export default function Navbar({
    className,
    color,
    position,
    logoColor
}: PropsType) {

    return (
        <header className={ `${className} ${position} w-full top-0 h-[74px] inset-x-0 z-[5]` }>
            <nav className={ `container` }>

                <section className={ navstyle['nav-container'] }>

                    {/* Brand logo */ }
                    <div className={ `w-[150px] ${logoColor}` }>
                        <Link href={ `/` } > <img className={ `w-full` } src="https://svgshare.com/i/svM.svg" alt="Brand-Logo" /> </Link>
                    </div>

                    {/* nav container */ }
                    <NavbarItems color={ color } />

                </section>



            </nav>
        </header>
    );
};
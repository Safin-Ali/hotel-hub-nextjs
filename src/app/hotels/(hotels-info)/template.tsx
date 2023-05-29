import Navbar from '@/components/Appbar/Navbar';
import React from 'react';
interface PropsType { children: React.ReactElement };

export default function Template({
    children
}: PropsType) {

    return (
        <>
            <Navbar logoColor={''} className={`bg-white-200 shadow-md p-3`} position={`sticky`} color={`text-inherit`}/>
            <main className={`container`}>
                {
                    children
                }
            </main>
        </>
    );
};
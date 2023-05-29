import React from 'react';
interface PropsType {
    children: string,
    rounded?: string,
    bgColor?: string
};

export default function Badge({
    children,
    rounded = `rounded-md`,
    bgColor = `bg-white-50`
}: PropsType) {

    return (
        <div className={ `text-inherit font-bold uppercase p-2 text-center rounded leading-none justify-center flex items-center ${rounded} ${bgColor}` }>
            { children }
        </div>
    );
};
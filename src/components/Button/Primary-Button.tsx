import React from 'react';
import primaryStyle from './btn.module.css';
interface PropsType {
  children: string,
  padding?:string
}

export default function PrimaryButton ({
  children,
  padding
}:PropsType) {

 return (
    <div className={`text-inherit`}>
      <button className={`${primaryStyle['pmr-btn']} ${padding ? padding : 'px-5 py-2'}`}>{children}</button>
    </div>
  );
};
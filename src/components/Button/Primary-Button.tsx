import React from 'react';
import primaryStyle from './btn.module.css';
interface PropsType {
  children: string,
  padding?:string
  onClick?: () => void
}

export default function PrimaryButton ({
  children,
  padding,
  onClick
}:PropsType) {

 return (
    <div className={`text-inherit`}>
      <button onClick={onClick} className={`${primaryStyle['pmr-btn']} ${padding ? padding : 'px-5 py-2'}`}>{children}</button>
    </div>
  );
};
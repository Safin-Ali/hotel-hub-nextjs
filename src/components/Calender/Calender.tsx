import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
interface PropsType {
  fromMonth:Date,
  toMonth:Date,
};

export default function Calender (props:PropsType) {

 return (
    <DayPicker
      mode={`range`}
      {
        ...props
      }

    />
  );
};
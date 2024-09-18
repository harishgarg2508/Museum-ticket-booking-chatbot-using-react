import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomTimePicker = ({ triggerNextStep }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleTimeConfirm = () => {
    if (selectedTime) {
      triggerNextStep({ value: selectedTime.toTimeString().split(' ')[0] });
    }
  };

  return (
    <div>
      <DatePicker
        selected={selectedTime}
        onChange={handleTimeChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
      <button onClick={handleTimeConfirm}>Confirm Time</button>
    </div>
  );
};

export default CustomTimePicker;
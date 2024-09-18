import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ triggerNextStep }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDateConfirm = () => {
    if (selectedDate) {
      triggerNextStep({ value: selectedDate.toISOString().split('T')[0] });
    }
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()}
        dateFormat="yyyy-MM-dd"
      />
      <button onClick={handleDateConfirm}>Confirm Date</button>
    </div>
  );
};

export default CustomDatePicker;
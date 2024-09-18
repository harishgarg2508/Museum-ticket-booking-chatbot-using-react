import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';

const DateSelection = ({ triggerNextStep }) => {
  const [date, setDate] = useState(null);

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleConfirm = () => {
    if (date) {
      triggerNextStep({ value: date.toISOString().split('T')[0] });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold mb-2">Select a date for your museum visit:</h3>
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleDateSelect}
        className="rounded-md border"
      />
      <Button 
        onClick={handleConfirm} 
        disabled={!date}
        className="mt-4"
      >
        Confirm Date
      </Button>
    </div>
  );
};

export default DateSelection;
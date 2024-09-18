import React from 'react';

const Greeting = ({ triggerNextStep }) => {
    
  return (
    <div>
      <h2>Welcome to the Museum Ticket Booking System!</h2>
      <button onClick={() => triggerNextStep()}>Start Booking</button>
    </div>
  );
};

export default Greeting;
import React from 'react';
import QRCode from 'qrcode.react';

const Confirmation = ({ steps, triggerNextStep }) => {
  const bookingDetails = {
    museum: steps.museumSelection.value,
    tickets: steps.ticketQuantity.value,
    name: steps.userDetails.value.name,
    // Add more details as needed
  };

  const bookingString = JSON.stringify(bookingDetails);

  return (
    <div>
      <h3>Booking Confirmed!</h3>
      <p>Your QR Code:</p>
      <QRCode value={bookingString} />
      <button onClick={() => triggerNextStep()}>Send QR Code</button>
    </div>
  );
};

export default Confirmation;
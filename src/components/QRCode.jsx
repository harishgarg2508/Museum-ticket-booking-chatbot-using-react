import React from 'react';

const QRCode = ({ triggerNextStep }) => {
  const sendQRCode = () => {
    // Here you would typically send the QR code via SMS and Email
    // For this example, we'll just move to the next step
    console.log('QR Code sent via SMS and Email');
    triggerNextStep();
  };

  return (
    <div>
      <h3>QR Code Sent!</h3>
      <p>Your QR Code has been sent to your email and phone.</p>
      <button onClick={sendQRCode}>Okay</button>
    </div>
  );
};

export default QRCode;
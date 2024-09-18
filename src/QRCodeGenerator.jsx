import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ userData }) => {
  // Convert userData object to a string
  const qrCodeData = JSON.stringify(userData);

  return (
    <div style={{ textAlign: 'center' }}>
      <h3>Your Ticket QR Code</h3>
      <QRCode 
        value={qrCodeData} 
        size={256} 
        level={'H'}
        includeMargin={true}
      />
      <p>Scan this QR code for your ticket information</p>
    </div>
  );
};

export default QRCodeGenerator;
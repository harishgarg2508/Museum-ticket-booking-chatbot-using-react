import React, { useState } from 'react';

const PaymentGateway = ({ triggerNextStep }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Here you would typically process the payment
    // For this example, we'll just move to the next step
    triggerNextStep({ value: 'payment_successful' });
  };

  return (
    <div>
      <h3>Enter Payment Details:</h3>
      <input name="cardNumber" placeholder="Card Number" onChange={handleChange} />
      <input name="expiryDate" placeholder="MM/YY" onChange={handleChange} />
      <input name="cvv" placeholder="CVV" onChange={handleChange} />
      <button onClick={handleSubmit}>Pay Now</button>
    </div>
  );
};

export default PaymentGateway;
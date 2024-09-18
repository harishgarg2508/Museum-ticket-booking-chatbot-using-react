import React, { useState } from 'react';

const TicketQuantity = ({ triggerNextStep }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleSubmit = () => {
    triggerNextStep({ value: quantity });
  };

  return (
    <div>
      <h3>How many tickets would you like?</h3>
      <input type="number" min="1" value={quantity} onChange={handleChange} />
      <button onClick={handleSubmit}>Confirm</button>
    </div>
  );
};

export default TicketQuantity;
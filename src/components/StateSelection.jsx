import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StateSelection = ({ triggerNextStep }) => {
  const [states, setStates] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint
    axios.get('https://api.example.com/states')
      .then(response => setStates(response.data))
      .catch(error => console.error('Error fetching states:', error));
  }, []);

  return (
    <div>
      <h3>Please select your state:</h3>
      {states.map((state, index) => (
        <button key={index} onClick={() => triggerNextStep({ value: state })}>
          {state}
        </button>
      ))}
    </div>
  );
};

export default StateSelection;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MuseumSelection = ({ triggerNextStep, previousStep }) => {
  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint
    axios.get(`https://api.example.com/museums?district=${previousStep.value}`)
      .then(response => setMuseums(response.data))
      .catch(error => console.error('Error fetching museums:', error));
  }, [previousStep.value]);

  return (
    <div>
      <h3>Please select a museum:</h3>
      {museums.map((museum, index) => (
        <button key={index} onClick={() => triggerNextStep({ value: museum })}>
          {museum}
        </button>
      ))}
    </div>
  );
};

export default MuseumSelection;
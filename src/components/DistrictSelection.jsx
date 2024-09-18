import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DistrictSelection = ({ triggerNextStep, previousStep }) => {
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    // Replace with your API endpoint
    axios.get(`https://api.example.com/districts?state=${previousStep.value}`)
      .then(response => setDistricts(response.data))
      .catch(error => console.error('Error fetching districts:', error));
  }, [previousStep.value]);

  return (
    <div>
      <h3>Please select your district:</h3>
      {districts.map((district, index) => (
        <button key={index} onClick={() => triggerNextStep({ value: district })}>
          {district}
        </button>
      ))}
    </div>
  );
};

export default DistrictSelection;
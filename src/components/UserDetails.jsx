import React, { useState } from 'react';

const UserDetails = ({ triggerNextStep }) => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    triggerNextStep({ value: userDetails });
  };

  return (
    <div>
      <h3>Please enter your details:</h3>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="age" type="number" placeholder="Age" onChange={handleChange} />
      <select name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} />
      <input name="phone" placeholder="Phone" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserDetails;
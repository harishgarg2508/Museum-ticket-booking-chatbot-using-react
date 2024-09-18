import React from 'react';
import './Navbar.css'; // Create this file for custom styling

const Navbar = () => {
  return (
    // <nav className="navbar">
    //   <h1>My Website</h1>
    //   <ul>
    //     <li><a href="#home">Home</a></li>
    //     <li><a href="#about">About</a></li>
    //     <li><a href="#contact">Contact</a></li>
    //   </ul>
    // </nav>

    <nav className="navbar">
    <ul className="navbar-menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#exhibitions">Exhibitions</a></li>
      <li><a href="#collections">Collections</a></li>
      <li><a href="#events">Events</a></li>
      <li><a href="#visit">Plan Your Visit</a></li>
      <li><a href="#about">About Us</a></li>
    </ul>
  </nav>
  
  );
};

export default Navbar;

import React, { useEffect, useRef } from 'react';
import ChatbotComponent from './ChatbotComponent';
import './App.css';
import Homepage from './components/Homepage';

// Define chatbot steps
const steps = [
  {
    id: '1',
    message: 'Welcome to the Museum Ticket Booking System!',
    trigger: '2',
  },
  {
    id: '2',
    message: 'Please select your language.',
    trigger: 'language',
  },
  {
    id: 'language',
    options: [
      { value: 'english', label: 'English', trigger: '3' },
      { value: 'spanish', label: 'Spanish', trigger: '3' },
    ],
  },
  {
    id: '3',
    message: 'Please select your state.',
    trigger: 'state',
  },
  {
    id: 'state',
    options: [
      { value: 'punjab', label: 'Punjab', trigger: 'punjabDistrict' },
      { value: 'himachal', label: 'Himachal Pradesh', trigger: 'himachalDistrict' },
      { value: 'haryana', label: 'Haryana', trigger: 'haryanaDistrict' },
    ],
  },
  // Punjab districts
  {
    id: 'punjabDistrict',
    message: 'Please select your district in Punjab.',
    trigger: 'punjabDistrictSelection',
  },
  {
    id: 'punjabDistrictSelection',
    options: [
      { value: 'jalandhar', label: 'Jalandhar', trigger: 'jalandharMuseums' },
      { value: 'kapurthala', label: 'Kapurthala', trigger: 'kapurthalaMuseums' },
    ],
  },
  {
    id: 'jalandharMuseums',
    message: 'Here are the museums in Jalandhar:',
    trigger: 'museumJalandhar',
  },
  {
    id: 'museumJalandhar',
    message: '1 Museum in Jalandhar',
    trigger: 'museum1Jalandhar',
  },
  {
    id: 'museum1Jalandhar',
    options: [
      { value: 'museum1', label: 'Sardar Vallabhbhai Patel National Museum', trigger: '6' },
    ],
  },
  {
    id: 'kapurthalaMuseums',
    message: '1 Museum in kapurthala',
    trigger: 'museumKapurthala',
  },
  {
    id: 'museumKapurthala',
    message: 'old museumJagatjit Palace and Museum',
    trigger: 'museum1Kapurthala',
  },
  {
    id: 'museum1Kapurthala',
    options: [
      { value: 'museum1', label: 'Sardar Vallabhbhai Patel National Museum', trigger: '6' },
    ],
  },
  // Himachal Pradesh districts
  {
    id: 'himachalDistrict',
    message: 'Please select your district in Himachal Pradesh.',
    trigger: 'himachalDistrictSelection',
  },
  {
    id: 'himachalDistrictSelection',
    options: [
      { value: 'bilaspur', label: 'Bilaspur', trigger: 'bilaspurMuseums' },
      { value: 'shimla', label: 'Shimla', trigger: 'shimlaMuseums' },
    ],
  },
  {
    id: 'bilaspurMuseums',
    message: 'Here are the museums in Bilaspur:',
    trigger: 'museumBilaspur',
  },
  {
    id: 'museumBilaspur',
    message: 'Museum in Bilaspur',
    trigger: 'museum1Bilaspur',
  },
  {
    id: 'museum1Bilaspur',
    options: [
      { value: 'museum1', label: 'Museum 1', trigger: '6' },
    ],
  },
  {
    id: 'shimlaMuseums',
    message: 'Here are the museums in Shimla:',
    trigger: 'museumShimla',
  },
  {
    id: 'museumShimla',
    message: 'Museum 1 in Shimla',
    trigger: 'museum1Shimla',
  },
  {
    id: 'museum1Shimla',
    options: [
      { value: 'museum1', label: 'Museum 1', trigger: '6' },
    ],
  },
  // Haryana districts
  {
    id: 'haryanaDistrict',
    message: 'Please select your district in Haryana.',
    trigger: 'haryanaDistrictSelection',
  },
  {
    id: 'haryanaDistrictSelection',
    options: [
      { value: 'panipat', label: 'Panipat', trigger: 'panipatMuseums' },
      { value: 'kurukshetra', label: 'Kurukshetra', trigger: 'kurukshetraMuseums' },
    ],
  },
  {
    id: 'panipatMuseums',
    message: 'Here are the museums in Panipat:',
    trigger: 'museumPanipat',
  },
  {
    id: 'museumPanipat',
    message: 'Museum 1 in Panipat',
    trigger: 'museum1Panipat',
  },
  {
    id: 'museum1Panipat',
    options: [
      { value: 'museum1', label: 'Srikrishna Museum Thanesar', trigger: '6' },
    ],
  },
  {
    id: 'kurukshetraMuseums',
    message: 'Here are the museums in Kurukshetra:',
    trigger: 'museumKurukshetra',
  },
  {
    id: 'museumKurukshetra',
    message: 'Museum 1 in Kurukshetra',
    trigger: 'museum1Kurukshetra',
  },
  {
    id: 'museum1Kurukshetra',
    options: [
      { value: 'museum1', label: 'Srikrishna Museum Thanesar', trigger: '6' },
    ],
  },
  {
    id: '6',
    message: 'Please enter your details.',
    trigger: 'name',
  },
  {
    id: 'name',
    message: 'What is your name?',
    trigger: 'getName',
  },
  {
    id: 'getName',
    user: true,
    trigger: 'age',
  },
  {
    id: 'age',
    message: 'What is your age?',
    trigger: 'getAge',
  },
  {
    id: 'getAge',
    user: true,
    trigger: 'gender',
  },
  {
    id: 'gender',
    message: 'What is your gender?',
    trigger: 'genderSelection',
  },
  {
    id: 'genderSelection',
    options: [
      { value: 'male', label: 'Male', trigger: 'email' },
      { value: 'female', label: 'Female', trigger: 'email' },
      { value: 'other', label: 'Other', trigger: 'email' },
    ],
  },
  {
    id: 'email',
    message: 'What is your email?',
    trigger: 'getEmail',
  },
  {
    id: 'getEmail',
    user: true,
    trigger: 'phone',
  },
  {
    id: 'phone',
    message: 'What is your phone number?',
    trigger: 'getPhone',
  },
  {
    id: 'getPhone',
    user: true,
    trigger: 'ticketQuantity',
  },
  {
    id: 'ticketQuantity',
    message: 'How many tickets do you want to book?',
    trigger: 'getTicketQuantity',
  },
  {
    id: 'getTicketQuantity',
    user: true,
    trigger: 'paymentGateway',
  },
  {
    id: 'paymentGateway',
    message: 'Please proceed to the payment gateway.',
    trigger: 'confirmation',
  },
  {
    id: 'confirmation',
    message: 'Your booking is confirmed! Generating QR code...',
    trigger: 'qrCode',
  },
  {
    id: 'qrCode',
    message: 'Your QR code has been generated. Here it is:',
    trigger: 'displayQR',
  },
  {
    id: 'displayQR',
    component: (
      <div>
        <img 
          src="/qrcode.jpg" 
          alt="QR Code" 
          style={{ width: '200px', height: '200px', margin: '10px 0' }}
        />
        <p>This QR code has also been sent to your email and phone.</p>
      </div>
    ),
    trigger: 'done',
  },
  {
    id: 'done',
    message: 'Thank you for your booking! Click "Done" to finish.',
    end: true,
  },
];

function App() {
  // Create a ref to the chatbot container
  const chatbotContainerRef = useRef(null);

  // Scroll to bottom function
  const scrollToBottom = () => {
    if (chatbotContainerRef.current) {
      chatbotContainerRef.current.scrollTop = chatbotContainerRef.current.scrollHeight;
    }
  };

  // Use useEffect to scroll to the bottom on component update
  useEffect(() => {
    scrollToBottom(); // Trigger scroll to bottom when the component renders or updates
  });

  return (
    <div className="chatbot-container" ref={chatbotContainerRef}>
      <ChatbotComponent steps={steps} floating={true} />
      <Homepage />
    </div>
  );
}

export default App;

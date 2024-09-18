import React from 'react';

const Homepage = () => {
  return (
    <div>
      <style>
      {`
          html, body {
            height: 100%;
            margin: 0;
          }

          /* Google Font Import Link */
@import url('https://fonts.googleapis.com/css2?family=Georgia:wght@600;500;700&display=swap');
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Georgia', sans-serif;
}
nav{

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  transition: all 0.4s ease;
  background-color:#8B4513;
}
nav.sticky{
  padding: 15px 20px;
  background: #4070f4;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
nav .nav-content{
  height: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav .logo a{
  font-weight: 500;
  font-size: 35px;
  color: black;
}
nav.sticky .logo a{
  color: #fff;
}
.nav-content .nav-links{
  display: flex;
}
.nav-content .nav-links li{
  list-style: none;
  margin: 0 8px;
}
 .nav-links li a{
  text-decoration: none;
  color: #0E2431;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 4px;
  transition: all 0.3s ease;
}
 .nav-links li a:hover{
   color: #4070f4;
 }
 nav.sticky .nav-links li a{
   color: #fff;
   transition: all 0.4s ease;
}
 nav.sticky .nav-links li a:hover{
  color: #0E2431;
}
.home{
  height: 100vh;
  width: 100%;
  background: url("images/background.png") no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  font-family: 'Ubuntu', sans-serif;
}
h2{
  font-size: 30px;
  margin-bottom: 6px;
  color: #4070f4;
}
.text{
  text-align: justify;
  padding: 40px 80px;
  box-shadow: -5px 0 10px rgba(0, 0, 0, 0.1);
}


          .homepage {
            background: url('/image1.jpg') no-repeat center center fixed;
            background-size: cover;
            color: white;
            text-align: center;
            height: 100vh; /* Full viewport height */
            display: flex;
            flex-direction: column;
            justify-content: center; /* Center content vertically */
            padding: 0 2rem; /* Adjust padding as needed */
          }
        
            .description {
    color: #333; /* Slightly lighter black for better contrast */
    font-size: 1.8rem; /* Increased font size for better visibility */
    font-weight: 700; /* Bold text */
    margin-top: 1.5rem; /* Increased spacing between heading and description */
    max-width: 100%; /* Limiting width to ensure text doesn't stretch too far */
    line-height: 1.8; /* Increased line height for better readability */
    padding: 1rem; /* Increased padding for more spacing inside the text container */
    border-radius: 8px; /* More rounded corners for a softer look */
    background-color: rgba(255, 255, 255, 0.8); /* Slightly opaque white background */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for better depth */
    animation: fadeIn 2s ease-out, bounce 2s infinite; /* Adding animations */
}

/* Keyframes for the fade-in animation */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* Keyframes for the bounce animation */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}


            
         .heading {
  color: white; /* Ensure text color contrasts with background */
  font-size: 5rem; /* Larger text size for visibility */
  font-weight: bold; /* Make text bold */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Add a shadow for better contrast */
  text-decoration: none;
  opacity: 0; /* Start hidden */
  transform: scale(0.8); /* Start slightly scaled down */
  animation: fadeInScaleUp 2s ease-out forwards; /* Apply the animation */
}

@keyframes fadeInScaleUp {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

          
          }
          .navbar a {
            color: white;
            text-decoration: none;
          }
        `}
      </style>
    <nav>
    <div class="nav-content">
      <div class="logo">
        <a href="#">MUSEUM</a>
      </div>
      <ul class="nav-links">
        <li><a href="home.html">Home</a></li>
        <li><a href="details.html">About</a></li>
        <li><a href="event.html">Events</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
  </nav>

      <div className="homepage">
  <h1 className="heading">Welcome to the Museum</h1>
  <p className="description">Explore our exhibits and plan your visit to the most fascinating museum collections.</p>
</div>

    </div>
  );
};

export default Homepage;

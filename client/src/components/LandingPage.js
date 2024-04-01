import React from 'react';
import styled from 'styled-components';
import party from '../images/party.png';
import la from '../images/la.png';
import peace from '../images/peace.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';


const StyledBody = styled.body`
  background-color: #79b5a2; /* Green color similar to Spotify */
  overflow: hidden;
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
`;

const StyledText = styled.h1`
  font-family: 'Frunch';
  font-size: 30px;
  text-align: center;
  position: relative; /* Ensure proper positioning */
  margin-bottom: 20px; /* Add some space between the text and the line */
   
  &::after {
    content: "";
    position: absolute;
    bottom: -15px; /* Adjust this value to control the distance of the line from the text */
    left: 50%;
    transform: translateX(-50%);
    width: 100%; /* Adjust the width of the line */
    height: 1px; /* Height of the line */
    background-color: black; /* Color of the line */
  }
`;

const StyledH2 = styled.h2`
  font-family: 'SF';
  font-size: 30px;
  text-align: center;
  margin-top: 220px;
`;

const StyledButton = styled.button`
  background-color: #178c41; /* Green */
  border: 2px solid black;
  color: white;
  padding: 10px 32px;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  display: block; /* Center the button horizontally */
  margin: 10px auto 0;
  font-family: 'SF';
  font-size: 16px;
  /* Add hover effect */
  &:hover {
    background-color: #137436; /* Darker shade of green */
    cursor: pointer; /* Change cursor to pointer */
  }
`;






const LandingPage = () => {
  const loginWithSpotify = () => {
    window.location.href = "http://localhost:8000/login";
  };

  return (<StyledBody>
    <div className="landing-page">
      <StyledText>Vibeify</StyledText>
      <StyledH2>Convert any image into a playlist that fits the vibe.</StyledH2>
      <StyledButton onClick={loginWithSpotify}>
        <FontAwesomeIcon icon={faSpotify} style={{ marginRight: '10px' }} /> {/* Adding Spotify icon */}
        Login with Spotify
      </StyledButton>

      <div style={{
            display: 'flex',
            justifyContent: 'center', // Center the images horizontally
            alignItems: 'center', // Center the images vertically
            gap: '50px', // Add space between the images
          }}>

        <img src={peace} alt="Peace Playlist" 
          style={{ 
            width: '290px', 
            height: 'auto', 
            borderRadius: '15px', 
            boxShadow: '1px 1px 3px #888888', 
            marginTop: '145px'
          }} 
        />

        <img src={la} alt="LA Playlist" 
          style={{ 
            width: '290px', 
            height: 'auto', 
            borderRadius: '15px', 
            boxShadow: '2px 2px 4px #888888',
            marginTop: '130px'
          }} 
        />

        <img src={party} alt="Party Time Playlist" 
          style={{ 
            width: '290px', 
            height: 'auto', 
            borderRadius: '15px', 
            boxShadow: '2px 2px 4px #888888', 
            marginTop: '130px'
          }} 
        />

        <img src={peace} alt="Peace Playlist" 
          style={{ 
            width: '290px', 
            height: 'auto', 
            borderRadius: '15px', 
            boxShadow: '2px 2px 4px #888888', 
            marginTop: '130px'
          }} 
        />

        <img src={la} alt="LA Playlist" 
          style={{ 
            width: '290px', 
            height: 'auto', 
            borderRadius: '15px', 
            boxShadow: '2px 2px 4px #888888', 
            marginTop: '130px'
          }} 
        />
      </div>
  
    </div>
  </StyledBody>
  );
};

export default LandingPage;
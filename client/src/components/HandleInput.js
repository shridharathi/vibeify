import React, { useState, useEffect  } from "react";
import styled from 'styled-components';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faImage } from '@fortawesome/free-regular-svg-icons';


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
  font-size: 15px;
  text-align: center;
`;

const StyledButton = styled.label`
  background-color: #800080;
  border: 2px solid black;
  color: white;
  padding: 10px 32px;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block; /* Center the button horizontally */
  margin: 10px auto 0;
  font-family: 'SF';
  font-size: 16px;
  cursor: pointer; /* Change cursor to pointer */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */

  /* Add hover effect */
  &:hover {
    background-color: #6a006a; /* Darker shade of purple */
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333; /* Adjust color as needed */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;


const HandleInput = () => {
  const [image, setImage] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const [textOutput, setTextOutput] = useState("");
  const [error, setError] = useState("");
  const [playlistId, setPlaylistId] = useState("");

  useEffect(() => {
    handleCallback();
  }, []);


  const handleCallback = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("access_token");
  
    if (accessToken) {
      setAccessToken(accessToken);
    } else {
      console.error("Access Token not found in URL");
    }
  };

  useEffect(() => {
    handleCallback();
  }, []);


  const uploadImage = async (e) => {
    setTextOutput("");
    setPlaylistId("");
    setError("");
    const file = e.target.files[0];

    if (!accessToken) {
      setError("Login to Spotify first!");
      return;
    }
    
    if (file) {
      const reader = new FileReader();

      reader.onload = async (event) => {
        const base64Image = event.target.result.split(",")[1];

        try {
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
              image: base64Image
            }),
          };

          const response = await fetch("http://localhost:8000/handle_image", options);
          if (!response.ok) {
            throw new Error("Failed to upload image."); // Handle non-200 responses
          }
          const data = await response.json();
          setTextOutput(data.answer);
          if (data.playlist_id) {
            setPlaylistId(data.playlist_id);
          }
        } catch (error) {
          console.error(error);
          setError("Something didn't work. Please try again!");
        }
      };

      reader.readAsDataURL(file);
      setImage(URL.createObjectURL(file)); // Display the uploaded image
    }
    else{
      setError("Please select an image to upload.");
    }
  };

  return (
    <StyledBody>
      <div className="app">
      <StyledText>Vibeify</StyledText>
        <section className="main">
          <div className="image-container">
            {image && <img className="image" src={image} alt="Uploaded" />}
          </div>
          <p className="extra-info">
            <span>
            <StyledButton htmlFor="files"> Upload an image </StyledButton>
            <input onChange={uploadImage} id="files" accept="image/*" type="file" hidden />
            </span>
          </p>
          <div className="output-container">
            {error && <StyledH2>{error}</StyledH2>}
            {!playlistId && !error && image && (<Spinner style={{ position: 'absolute', top: '65%', left: '48.3%'}}/>)}
            {playlistId && (
              <div className="spotify-playlist">
                <iframe
                  src={`https://open.spotify.com/embed/playlist/${playlistId}`}
                  width="300"
                  height="380"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </div>
          )}
          </div>
        </section>
      </div>
    </StyledBody>
  );
};

export default HandleInput;
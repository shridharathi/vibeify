# Vibeify

This webapp leverages OpenAI and Spotify APIs to transform any inputted image into a Spotify playlist which fits the "vibe" of the image.


# Setup

Create .env file in root directory

`OPENAI_API_KEY=<YOUR API KEY>`

`CLIENT_ID=<YOUR SPOTIFY CLIENT ID>`

`CLIENT_SECRET=<YOUR SPOTIFY CLIENT SECRET>` <br /> 




Create Virtual Environment 

`python3 -m venv venv`

`source venv/bin/activate` <br /> 




Install Python dependencies

`pip install -r requirements.txt` <br /> 




Launch Backend Server

`python3 server/main.py` <br /> 




Launch Frontend Client

`export NODE_OPTIONS=--openssl-legacy-provider`
`npm start`


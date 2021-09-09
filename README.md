# react-weatherapp - JavaScript web application
Depoyed at: http://ec2-13-53-188-252.eu-north-1.compute.amazonaws.com/ NOTE! For location specific weather you need to enable insecure geolocation access in you browser.
By default Helsinki weather is displayed.
Weatherapp for displaying the weather in your current location using data from http://api.openweathermap.org

NOTE! API key for openweathermap.org needed to run the application. Set API key to environment variable API\_KEY in an .env file on project root
Also .env file includes line: REACT_APP_BACKEND_URL=/api

## Running the application
Run application locally with `docker-compose up --build`
App is served on localhost with nginx

## Linting and unit testing (in folder /frontend)
1. Run `npm install` to install required packages for testing and linting
2. Run `npm run lint` to lint with set eslint config
3. Run `npm run test` to run unit tests with Jest

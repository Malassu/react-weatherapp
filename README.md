# react-weatherapp - JavaScript web application
Weatherapp for displaying the weather in your current location using data from 'http://api.openweathermap.org/data/2.5'

NOTE! file 'src/API/config.js' needed to fetch weather data.
File needs to contain following code:
`export const config = {
  API_KEY: <YOUR_API_KEY>
}`

## Running the application
Run application locally `npm install && npm start` or by building the docker image
and running the app in a container.

## Linting and unit testing
1. Run `npm install` to install required packages for testing and linting
2. Run `npm run lint` to lint with set eslint config
3. Run `npm run test` to run unit tests with Jest

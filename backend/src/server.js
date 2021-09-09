const express = require("express")
const fetch = require("node-fetch")
const apiURL = 'http://api.openweathermap.org/data/2.5'
const appID = process.env.API_KEY || '';

const cors = require('cors')
const app = express()
const port = 9000

app.use(cors())

app.get("/", (req, res) => {
  res.json({
    msg: "Welcome to weather API!"
  })
})

async function getWeather(lon, lat) {
  const endpoint = `${apiURL}/weather?lat=${lat}&lon=${lon}&appid=${appID}&units=metric`
  const response = await fetch(endpoint)
  return response ? response.json() : {}
}

async function getForecast(lon, lat) {
  const endpoint = `${apiURL}/forecast?lat=${lat}&lon=${lon}&appid=${appID}&units=metric`
  const response = await fetch(endpoint)
  return response ? response.json() : {}
}

app.get("/weather", async (req, res) => {
  const lon = req.query.lon
  const lat = req.query.lat
  const response = await getWeather(lon, lat)
  res.json(response)
})

app.get("/forecast", async (req, res) => {
  const lon = req.query.lon
  const lat = req.query.lat
  const response = await getForecast(lon, lat)
  res.json(response)
})

app.listen(port, () => console.log(`The server is listening on port ${port}`))

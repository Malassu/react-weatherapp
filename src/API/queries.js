const appID = process.env.REACT_APP_WEATHER_API_KEY
const apiURL = 'http://api.openweathermap.org/data/2.5'

export const getWeatherFromApi = async (lon, lat) => {
  try {
    const endpoint = `${apiURL}/weather?lat=${lat}&lon=${lon}&appid=${appID}&units=metric`
    const response = await fetch(endpoint)
    return response ? response.json() : {}
  } catch (error) {
    console.error(error)
  }
  return {}
}

export const getForecastFromApi = async (lon, lat) => {
  try {
    const endpoint = `${apiURL}/forecast?lat=${lat}&lon=${lon}&appid=${appID}&units=metric`
    const response = await fetch(endpoint)
    return response ? response.json() : {}
  } catch (error) {
    console.error(error)
  }
  return {}
}

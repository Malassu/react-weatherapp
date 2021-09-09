const apiURL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:9000'

export const getWeatherFromApi = async (lon, lat) => {
  try {
    const endpoint = `${apiURL}/weather?lat=${lat}&lon=${lon}`
    const response = await fetch(endpoint)
    return response ? response.json() : {}
  } catch (error) {
    console.error(error)
  }
  return {}
}

export const getForecastFromApi = async (lon, lat) => {
  try {
    const endpoint = `${apiURL}/forecast?lat=${lat}&lon=${lon}`
    const response = await fetch(endpoint)
    return response ? response.json() : {}
  } catch (error) {
    console.error(error)
  }
  return {}
}

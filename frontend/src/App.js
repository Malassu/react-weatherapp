import React from 'react'
import Geolocation from 'react-native-geolocation-service'
import MediaCard from './MediaCard'
import { getWeatherFromApi, getForecastFromApi } from './API/queries'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.getWeather = this.getWeather.bind(this)
    this.state = {
      location: 'Helsinki',
      lon: 24.9355,
      lat: 60.1695
    }
  }

  async componentDidMount () {
    await this.getLocation()
    await this.getWeather()
  }

  async getLocation () {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lon: position.coords.longitude,
          lat: position.coords.latitude
        })
        this.getWeather()
      },
      (error) => {
        console.log(error.code, error.message)
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    )
  }

  async getWeather () {
    const [weatherData] = await Promise.all([getWeatherFromApi(this.state.lon, this.state.lat)])
    if (weatherData.weather && weatherData.main) {
      console.log('Weather data:', weatherData)
      let dateStr = new Date().toString()
      const index = dateStr.indexOf(' (')
      if (index) {
        dateStr = dateStr.substr(0, index)
      }
      this.setState(
        {
          icon: weatherData.weather[0]?.icon.slice(0, -1),
          humidity: weatherData.main.humidity,
          temperature: Math.round(weatherData.main.temp),
          pressure: weatherData.main.pressure,
          updatedAt: dateStr,
          location: weatherData.name,
          error: ''
        }
      )
      this.getForecast()
    } else {
      this.setState({ error: 'Unbable to fetch weather' })
    }
  }

  async getForecast () {
    const [forecastData] = await Promise.all([getForecastFromApi(this.state.lon, this.state.lat)])
    if (forecastData) {
      console.log('Forecast data:', forecastData)
      this.setState(
        {
          forecastIcon: forecastData.list[1]?.weather[0].icon.slice(0, -1),
          forecastTime: forecastData.list[1]?.dt_txt
        }
      )
    } else {
      this.setState({ error: 'Unbable to fetch forecast' })
    }
  }

  render () {
    const { state } = this

    return (
      <div>
        <div className="icon">
          <MediaCard state={state} onClick={this.getWeather} />
        </div>
      </div>
    )
  }
}

export default App

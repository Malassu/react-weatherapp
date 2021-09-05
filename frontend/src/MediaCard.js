import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    paddingTop: '20px'
  },
  media: {
    height: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default function MediaCard (props) {
  const classes = useStyles()
  const {
    icon,
    temperature,
    humidity,
    pressure,
    forecastIcon,
    forecastTime,
    location,
    updatedAt,
    error
  } = props.state
  return (
    <div>
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              title={`Current weather in ${location}`}
              className={classes.media}>
              <div>
                <img width={120} height={120} alt="weather_icon" src={`/img/${icon}.svg`} />
              </div>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5">
                {`Current weather in ${location}`}
              </Typography>
              <Typography variant="h6" color="textPrimary" component="div">
                {temperature && <p>Temperature: {temperature}&deg;C</p>}
              </Typography>
              <Typography variant="subtitle1" color="textPrimary" component="div">
                {humidity && <div>Humidity: {humidity}%</div>}
                {pressure && <div>Pressure: {pressure} mbar</div>}
              </Typography>
              <Typography variant="body1" color="textSecondary" component="div">
                {updatedAt && <p>Updated at: {updatedAt}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={props.onClick}>
              Update
            </Button>
          </CardActions>
        </Card>
      </div>
      <div style={{ paddingTop: '10px' }}>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h5">
              Forecast
            </Typography>
            <Typography className={classes.pos} color="textSecondary" component="div">
              {forecastTime && <p>{location} at {forecastTime}</p>}
            </Typography>
            <Typography variant="body2" component="p">
              <img width={90} height={90} alt="weather_icon" src={`/img/${forecastIcon}.svg`} />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

MediaCard.propTypes = {
  state: PropTypes.shape({
    location: PropTypes.string.isRequired,
    temperature: PropTypes.number,
    humidity: PropTypes.number,
    pressure: PropTypes.number,
    forecastIcon: PropTypes.string,
    icon: PropTypes.string,
    forecastTime: PropTypes.string,
    updatedAt: PropTypes.string,
    error: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

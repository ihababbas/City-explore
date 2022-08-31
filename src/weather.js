import React from 'react';

import WeatherDay from './weatherday'

class Weather extends React.Component {
    render() {
        console.log(this.props.weatherData,"dataview")
    return(
      
        this.props.weatherData.map((day,index) => (
            <WeatherDay 
                key = {index}
                date = {day.date}
                des = {day.description}
                />
        ))
    )
  }
}
export default Weather;
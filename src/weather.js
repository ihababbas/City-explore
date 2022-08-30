import React from 'react';

import Card from 'react-bootstrap/Card';


class Weather extends React.Component {
    render() {
        console.log(this.props.weatherData,"dataview")
    return(
      
        this.props.weatherData.map((day,index) => (
        <div key = {index}>

        <Card.Title>{day.date}</Card.Title>
        <Card.Text>{day.description}</Card.Text>
        </div>
        ))
    )
  }
}
export default Weather;
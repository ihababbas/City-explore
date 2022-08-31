import React from 'react';

import Card from 'react-bootstrap/Card';


class Weather extends React.Component {
    render() {
        console.log(this.props.weatherData,"dataview")
    return(
         <>
        {this.props.weatherData.map((index) => { return (
        <div key = {index}>

        <Card.Title>{index.date}</Card.Title>
        <Card.Text>{index.description}</Card.Text>
        </div>
        )
        }
        )}
        </>
    )
  }
}
export default Weather;
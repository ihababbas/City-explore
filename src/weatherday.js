import React from 'react';

import Card from 'react-bootstrap/Card';


class weatherday extends React.Component {
    render() {
     
    return(
     
        <div key = {this.props.key}>
        <Card>
        <Card.Title>{`Date: ${this.props.date}`}</Card.Title>
        <Card.Text>{`Descreption: ${this.props.des}`}</Card.Text>
        </Card>
        </div>
        )
    
  }
}
export default weatherday;
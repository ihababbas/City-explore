import React from 'react';

import Card from 'react-bootstrap/Card';


class weatherday extends React.Component {
    render() {
     
    return(
     
        <div key = {this.props.key}>

        <Card.Title>{this.props.date}</Card.Title>
        <Card.Text>{this.props.des}</Card.Text>
        </div>
        )
    
  }
}
export default weatherday;
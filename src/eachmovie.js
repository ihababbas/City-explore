import React from 'react';
import Card from 'react-bootstrap/Card'

class eachMovie extends React.Component {
    render() {
        return(
        
<Card  className="card" style={{ width: "18rem"  }}>
          <Card.Title>{`Title: ${this.props.title}`}</Card.Title>
          <Card.Img src={this.props.img} />
          <Card.Text>{`Overview: ${this.props.overview}`}</Card.Text>
          <Card.Text>{`avgVote: ${this.props.avgVote}`}</Card.Text>
          <Card.Text>{`sumVote: ${this.props.sumVote}`}</Card.Text>
          <Card.Text>{`popularity: ${this.props.popularity}`}</Card.Text>
          <Card.Text>{`release: ${this.props.release}`}</Card.Text>
        </Card>           
          )
        }
      }
      
      export default eachMovie;

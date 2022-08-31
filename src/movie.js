import React from'react';
import Card from 'react-bootstrap/Card'


class Movie extends React.Component {
  render() {
    
    let display = this.props.movieData.map(x => {
        return (<Card  className="card" style={{ width: "18rem"  }}>
          <Card.Title>{x.title}</Card.Title>
          <Card.Img src={`${x.imgPath}`} />
          <Card.Text>{x.overview}</Card.Text>
          <Card.Text>{x.avgVote}</Card.Text>
          <Card.Text>{x.sumVote}</Card.Text>
          <Card.Text>{x.popularity}</Card.Text>
          <Card.Text>{x.release}</Card.Text>
        </Card>)
    })
console.log(display)
    return(
      <>
      
        {display}
      
      </>
    )
  }
}

export default Movie;
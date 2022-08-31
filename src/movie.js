import React from'react';

import Emovie from './eachmovie'

class Movie extends React.Component {
  render() {
    
    

        
    

    return(
        this.props.movieData.map( (x) => (
            <Emovie  
            title = {x.title}
           img = {`${x.imgPath}`}
           overview = {x.overview}
           avgVote  =  {x.avgVote}
           sumVote = {x.sumVote}
           popularity= {x.popularity}
           release = {x.release}
                />
        ))
    )
  }
}

export default Movie;
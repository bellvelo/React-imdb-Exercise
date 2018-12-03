import React from 'react';


class Movie extends React.Component{
  render(){
    return(
        <li><a href={this.props.film.url}>{this.props.film.name}</a></li>
    )
  }
}

export default Movie

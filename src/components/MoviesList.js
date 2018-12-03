import React from 'react';
import Movie from './Movie'

class MoviesList extends React.Component{
  render(){

    const filmNodes = this.props.films.map(film => {
      return(
        <Movie key={film.id} film={film} />
      )
    })

    return(
      <div className="movie-list">
      <ul>{filmNodes}</ul>
      </div>
    )
  }
}

export default MoviesList

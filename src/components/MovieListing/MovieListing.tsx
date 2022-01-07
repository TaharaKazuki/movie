import React from 'react'
import { useAppSelector } from '../../app/hooks'

// component
import MovieCard from '../MovieCard/MovieCard'
// style
import '../MovieListing/MovieListing.scss'
// type
import responseType from '../../common/apis/response.json'

const MovieListing = () => {
  const allMovies = useAppSelector(
    (state) => state.movies.movies
  ) as typeof responseType

  const allShows = useAppSelector(
    (state) => state.movies.shows
  ) as typeof responseType

  const renderMovies =
    allMovies.Response === 'True' ? (
      allMovies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{allMovies.Error}</h3>
      </div>
    )

  const renderShows =
    allShows.Response === 'True' ? (
      allShows.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="shows-error">
        <h3>{allShows.Error}</h3>
      </div>
    )

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  )
}

export default MovieListing

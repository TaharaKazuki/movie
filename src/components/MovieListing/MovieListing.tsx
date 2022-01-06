import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

const MovieListing = () => {
  const allMovies = useAppSelector((state) => state.movies.movies)
  const allShows = useAppSelector((state) => state.movies.shows)

  return <div></div>
}

export default MovieListing

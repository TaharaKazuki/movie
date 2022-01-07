import React, { useEffect } from 'react'
// redux
import { useAppDispatch } from '../../app/hooks'
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlice'

// component
import MovieListing from '../MovieListing/MovieListing'

const Home = () => {
  const dispatch = useAppDispatch()
  const movieText = 'Harry'
  const showText = 'Friends'
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
  }, [dispatch])

  return (
    <div>
      <div className="banner-img" />
      <MovieListing />
    </div>
  )
}

export default Home

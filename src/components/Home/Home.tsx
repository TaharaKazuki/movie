import React, { useEffect } from 'react'
// redux
import { useAppDispatch } from '../../app/hooks'
import { fetchAsyncMovies } from '../../features/movies/movieSlice'

// component
import MovieListing from '../MovieListing/MovieListing'

const Home = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAsyncMovies())
  }, [dispatch])

  return (
    <div>
      <div className="banner-img" />
      <MovieListing />
    </div>
  )
}

export default Home

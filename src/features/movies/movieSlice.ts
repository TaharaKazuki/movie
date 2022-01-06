import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const movieText = 'Harry'
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    )
    return response.data
  }
)

interface IMoviesState {
  movies: {} | any
  shows: {} | any
  selectMovies: {} | any
}

const initialState: IMoviesState = {
  movies: {},
  shows: {},
  selectMovies: {},
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovies = {}
    },
  },
})

export const { removeSelectedMovieOrShow } = moviesSlice.actions
export default moviesSlice.reducer

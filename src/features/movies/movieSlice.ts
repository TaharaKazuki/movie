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

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async () => {
    const seriesText = 'Friends'
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${seriesText}&type=series`
    )
    return response.data
  }
)

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  'movies/fetchAsyncMovieOrShowDetail',
  async (id: number) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
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
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, (state, action) => {
      console.info('Pendding')
    })
    builder.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
      return { ...state, movies: payload }
    })
    builder.addCase(fetchAsyncMovies.rejected, () => {
      console.info('reject')
    })
    builder.addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
      return { ...state, shows: payload }
    })
    builder.addCase(
      fetchAsyncMovieOrShowDetail.fulfilled,
      (state, { payload }) => {
        return { ...state, selectMoviesOrShow: payload }
      }
    )
  },
})

export const { removeSelectedMovieOrShow } = moviesSlice.actions
export default moviesSlice.reducer

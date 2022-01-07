import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKey'

import responseType from '../../common/apis/response.json'
import responseDetail from '../../common/apis/responseDetail.json'

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async (movieText: string) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    )
    return response.data
  }
)

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async (seriesText: string) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${seriesText}&type=series`
    )
    return response.data
  }
)

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  'movies/fetchAsyncMovieOrShowDetail',
  async (id: string) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    return response.data
  }
)

interface IMoviesState {
  movies: {} | typeof responseType
  shows: {} | typeof responseType
  selectMovies: {} | typeof responseDetail
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
        return { ...state, selectMovies: payload }
      }
    )
  },
})

export const { removeSelectedMovieOrShow } = moviesSlice.actions
export default moviesSlice.reducer

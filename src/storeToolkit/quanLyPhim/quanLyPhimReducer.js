import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { quanLyPhimServices } from '../../services/quanLyPhimService'

const initialState = {
    movieList: [],
    movieDetail: undefined,
    isFetching: false,
    isFetchingDetail: false,
    error: undefined,
    number: 1
}

export const { reducer: quanLyPhimReducer, actions: quanLyPhimActions } = createSlice({
    name: 'quanLyPhim',
    initialState,
    // xử lý những action đồng bộ => không sử dụng để xử lý các action được tạo từ createAsyncThunk
    reducers: {
        // getMovieList: (state, action) => {
        //     state.movieList = action.payload
        // },
        // getMovieDetail: (state, action) => {
        //     state.movieDetail = action.payload
        // },
        increase: (state, action)=>{
            state.number = state.number + action.payload
        }
    },

    // Xử lý những action bất đồng bộ (call API)
    extraReducers: (builder) => {
        builder
            // getMovieList
            .addCase(getMovieList.pending, (state, action) => {
                state.isFetching = true
            })
            .addCase(getMovieList.fulfilled, (state, action) => {
                state.movieList = action.payload
                state.isFetching = false
            })
            .addCase(getMovieList.rejected, (state, action) => {
                state.error = action.payload
                state.isFetching = false
            })

            // get movieById
            .addCase(getMovieById.pending, (state, action)=>{
                state.isFetchingDetail = true
            })
            .addCase(getMovieById.fulfilled, (state, action)=>{
                state.isFetchingDetail = false
                state.movieDetail = action.payload
            })
            .addCase(getMovieById.rejected, (state, action)=>{
                state.isFetchingDetail = false
                state.movieDetail = action.payload
            })
    },
})

export const getMovieList = createAsyncThunk(
    'quanLyPhim/getMovieList', //action type
    async (data, { dispatch, getState, rejectWithValue }) => {
        try {
            const value = getState().quanLyPhimReducer
            console.log('value: ', value);
            const result = await quanLyPhimServices.getMovieList()
            return result.data.content
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const getMovieById = createAsyncThunk(
    'quanLyPhim/getMovieById',
    async (movieId, { dispatch, getState, rejectWithValue }) => {
        try {
            const result = await quanLyPhimServices.getMovieById(movieId)
            return result.data.content
        }catch(err){
            return rejectWithValue(err.response.data)
        }
    }
)

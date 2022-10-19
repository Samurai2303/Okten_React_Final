import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

let initialState = {
    movies: [],
    moviesLoading: false,
    moviesError: null,
    querySort: null,
    queryAdult: false,
    queryPage: 1,
    queryGenre: null,
    movie: null,
    movieLoading: false,
    movieError: null,
    flag: {type: '', movieName: ''},
    pagesAmount: 1
};

let searchMovies = createAsyncThunk(
    'moviesSlice/searchMovies',
    async ({movieName}, {rejectWithValue, getState}) => {
        try {
            let {moviesReducer} = getState();
            let {data} = await moviesService.searchMovies(movieName, moviesReducer.queryPage, moviesReducer.queryAdult);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

let getMovieInfo = createAsyncThunk(
    'moviesSlice/getMovieInfo',
    async ({id}, {rejectWithValue}) => {
        try {
            let {data} = await moviesService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

let getMovies = createAsyncThunk(
    'moviesSlice/getMovies',
    async (_, {rejectWithValue, getState}) => {
        try {
            let {moviesReducer} = getState();
            let {data} = await moviesService.getMovies(moviesReducer.queryPage, moviesReducer.querySort, moviesReducer.queryGenre, moviesReducer.queryAdult);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)

let moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setQuerySort: (state, action) => {
            state.querySort = action.payload;
        },
        setQueryAdult: (state, action) => {
            state.queryAdult = action.payload;
        },
        setQueryGenre: (state, action) => {
            state.queryGenre = action.payload;
        },
        setPage: (state, action) => {
            state.queryPage = action.payload;
        },
        resetPage: (state) => {
            state.queryPage = 1;
        },
        setFlag: (state, action) => {
            state.flag = {type: action.payload.type, movieName: action.payload.movieName};
        },
        setPagesAmount: (state, action) => {
            state.pagesAmount = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.pagesAmount = action.payload.total_pages;
                state.moviesLoading = false;
            })
            .addCase(searchMovies.rejected, (state, action) => {
                state.moviesError = action.payload;
                state.moviesLoading = false;
            })
            .addCase(searchMovies.pending, (state) => {
                state.moviesLoading = true;
            })
            .addCase(getMovieInfo.fulfilled, (state, action) => {
                state.movie = action.payload;
                state.movieLoading = false;
            })
            .addCase(getMovieInfo.rejected, (state, action) => {
                state.movieError = action.payload;
                state.movieLoading = false;
            })
            .addCase(getMovieInfo.pending, (state) => {
                state.movieLoading = true;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.pagesAmount = action.payload.total_pages;
                state.moviesLoading = false;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.moviesError = action.payload;
                state.moviesLoading = false;
            })
            .addCase(getMovies.pending, (state) => {
                state.moviesLoading = true;
            })
});

let {
    reducer: moviesReducer,
    actions: {setQuerySort, setQueryAdult, setQueryGenre, resetPage, setFlag, setPagesAmount, setPage}
} = moviesSlice;

let moviesActions = {
    searchMovies,
    getMovieInfo,
    getMovies,
    setQuerySort,
    setQueryAdult,
    setQueryGenre,
    resetPage,
    setFlag,
    setPagesAmount,
    setPage
};

export {moviesReducer, moviesActions};


import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services";

let initialState = {
    movies: [],
    moviesLoading: false,
    moviesError: null,
    selectedMovie: null,
    querySort: null,
    queryAdult: false,
    queryPage: 1,
    queryGenre: null,
    keywordsMovies: [],
    keywordsMoviesLoading: false,
    keywordsMoviesError: null,
    movie: null,
    movieLoading: false,
    movieError: null
};

let getKeywordsMovies = createAsyncThunk(
    'moviesSlice/getKeywordsMovies',
    async ({keyword}, {rejectWithValue}) => {
        try {
            let {data} = await moviesService.getKeywordsMovies(keyword);
            return data.results;
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
            return data.results;
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
            return data.results;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)

let moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        clearMovies: (state) => {
            state.movies = [];
        },
        addMovie: (state, action) => {
            state.movies.push(action.payload);
        },
        setQuerySort: (state, action) => {
            state.querySort = action.payload;
        },
        setQueryAdult: (state, action) => {
            state.queryAdult = action.payload;
        },
        setQueryGenre: (state, action) => {
            state.queryGenre = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getKeywordsMovies.fulfilled, (state, action) => {
                state.keywordsMovies = action.payload;
                state.keywordsMoviesLoading = false;
            })
            .addCase(getKeywordsMovies.rejected, (state, action) => {
                state.keywordsMoviesError = action.payload;
                state.keywordsMoviesLoading = false;
            })
            .addCase(getKeywordsMovies.pending, (state) => {
                state.keywordsMoviesLoading = true;
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
                state.movies = action.payload;
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
    actions: {clearMovies, addMovie, setQuerySort, setQueryAdult, setQueryGenre}
} = moviesSlice;

let moviesActions = {
    getKeywordsMovies,
    getMovieInfo,
    getMovies,
    clearMovies,
    addMovie,
    setQuerySort,
    setQueryAdult,
    setQueryGenre
};

export {moviesReducer, moviesActions};


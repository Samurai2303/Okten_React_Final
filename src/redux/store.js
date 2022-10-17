import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices/movies.slice";
import {genresReducer} from "./slices/genres.slice";

let rootReducer = combineReducers({
    moviesReducer,
    genresReducer
});

let setupStore = () => configureStore({reducer: rootReducer});

export {setupStore};

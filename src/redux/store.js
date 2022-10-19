import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices/movies.slice";
import {genresReducer} from "./slices/genres.slice";
import {switcherReducer} from "./slices/switcher.slice";

let rootReducer = combineReducers({
    moviesReducer,
    genresReducer,
    switcherReducer
});

let setupStore = () => configureStore({reducer: rootReducer});

export {setupStore};

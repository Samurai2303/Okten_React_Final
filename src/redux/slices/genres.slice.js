import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genresService} from "../../services";

let initialState = {
    genres: [],
    genresError: null
};

let getAll = createAsyncThunk(
    'genresSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            let {data} = await genresService.getAll();
            return data.genres;
        }catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

let genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.genresError = action.payload;
            })
});

let {reducer: genresReducer} = genresSlice;

let genresActions = {
    getAll
};

export {genresReducer, genresActions};
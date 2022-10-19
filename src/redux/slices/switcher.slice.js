import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    theme: 'light'
};

let switcherSlise = createSlice({
    name: 'switcherSlice',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.theme === 'light' ? state.theme = 'dark' : state.theme = 'light';
        }
    }
});

let {reducer:switcherReducer, actions: {changeTheme}} = switcherSlise;

let switcherActions = {
    changeTheme
};

export {switcherReducer, switcherActions};
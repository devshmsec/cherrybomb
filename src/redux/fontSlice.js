import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'font',
    initialState: {
        size: '14px',
        family: 'Lato',
    },
    reducers: {
        handleFontSize: (state, action) => {
            state.size = action.payload;
        },
        handleFontFamily: (state, action) => {
            state.family = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { handleFontSize, handleFontFamily } = slice.actions;
export default slice.reducer;

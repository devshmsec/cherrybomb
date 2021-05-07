import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'resize',
    initialState: {
        value: 320,
    },
    reducers: {
        handleResize: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { handleResize } = slice.actions;
export default slice.reducer;

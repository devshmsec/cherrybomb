import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'sidebar',
    initialState: {
        value: 'Storage',
    },
    reducers: {
        handleTabChange: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { handleTabChange } = slice.actions;
export default slice.reducer;

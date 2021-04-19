import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '@redux/sidebarSlice';
import resizeReducer from '@redux/resizeSlice';

export default configureStore({
    reducer: {
        sidebar: sidebarReducer,
        resize: resizeReducer,
    },
});

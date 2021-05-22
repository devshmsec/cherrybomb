import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '@redux/sidebarSlice';
import resizeReducer from '@redux/resizeSlice';
import fontReducer from '@redux/fontSlice';

export default configureStore({
    reducer: {
        sidebar: sidebarReducer,
        resize: resizeReducer,
        font: fontReducer,
    },
});

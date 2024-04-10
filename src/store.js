import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import movieDataReducer from './features/movieDataSlice'; 

export const store = configureStore({
    reducer: {
        user: userReducer,
        movieData: movieDataReducer,
    },
});

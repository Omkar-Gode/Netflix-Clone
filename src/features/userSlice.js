import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isAuthenticated: true,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
        }
    },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;


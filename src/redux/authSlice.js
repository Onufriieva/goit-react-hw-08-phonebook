import { createSlice } from '@reduxjs/toolkit';
import { register, login } from './operations';

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoged: false,
};
 
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, { payload }){
            state.user = payload.user;
            state.token = payload.token;
            state.isLoged = true;
        }, 
        [login.fulfilled](state, { payload }){
            state.user = payload.user;
            state.token = payload.token;
            state.isLoged = true;
        }
    },
})

export const authReducer = authSlice.reducer;
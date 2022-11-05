import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, refreshUser } from './operations';

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
        },
        [logout.fulfilled](state, _){
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoged = false;
        },
        [refreshUser.fulfilled](state, { payload }){
            state.user = payload;
            state.isLoged = true;
        },
    },
})

export const authReducer = authSlice.reducer;


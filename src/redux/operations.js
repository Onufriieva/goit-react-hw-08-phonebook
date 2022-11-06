import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import * as api from "../components/api/phonebook"


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
};



export const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            token.set(data.token);
            return data; 
        } catch (error) {
          return rejectWithValue(error);
        }
    }
);


export const login = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
  

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
            token.unset();
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);




export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async(_, thunkApi) => {
        try {
            const { data } = await axios.get('/contacts/');
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);



export const addContact = createAsyncThunk(
    "contacts/addContact",
    async({ name, number }, { rejectWithValue }) => {
        try {
            const result = await axios.post('/contacts/', {name, number});
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);


export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async(id, thunkApi) => {
        try {
            const items = await axios.delete(`/contacts/${id}`);
            return items;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);  
 

export const refresh = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const tokenFresh = state.auth.token;
  
      if (tokenFresh === null) {
        return thunkAPI.rejectWithValue();
      }
      token.set(tokenFresh);
      try {
        const { data } = await axios.get('/users/current');
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );  
 
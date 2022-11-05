import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "../components/api/phonebook"



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
            const { data } = await api.registerUser(credentials);
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
            const { data } = await api.loginUser(credentials);
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
            await api.logoutUser();
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
            const data = await api.getContacts();
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
            const result = await api.addContacts(name, number);
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
            const items = await api.removeContacts(id);
            return items;
        } catch (error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);  
 

export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      console.log(state);
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
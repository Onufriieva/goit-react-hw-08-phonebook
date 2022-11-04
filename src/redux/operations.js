import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "../components/api/phonebook"


// axios.defaults.baseURL = 



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
    async (credential, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', credential);
            token.set(data.token);
            return data;
        } catch (error) {
          return rejectWithValue(error);
        }
    });


    export const login = createAsyncThunk(
        'auth/login',
        async (credential, { rejectWithValue }) => {
            try {
                const { data } = await axios.post('/users/login', credential);
                token.set(data.token);
                return data;
            } catch (error) {
              return rejectWithValue(error);
            }
        });


    // export const register = createAsyncThunk(
    //     'auth/register',
    //     async (credentials, { rejectWithValue }) => {
    //       try {
    //         const user = await registerNewUser(credentials);
    //         token.set(user.token);
    //         return user;
    //       } catch (error) {
    //         return rejectWithValue(error);
    //       }
    //     }
    //   );




  

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
    async({ name, phone }, { rejectWithValue }) => {
        try {
            const result = await api.addContacts(name, phone);
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


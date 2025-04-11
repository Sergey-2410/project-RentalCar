//filters/operations.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../cars/operations';

export const fetchBrands = createAsyncThunk(
  'filters/brands',
  async (_, thunkAPI) => {
    try {
      const response = await API.get('/brands');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPrice = createAsyncThunk(
  'filters/price',
  async (_, thunkAPI) => {
    try {
      const response = await API.get('/cars');
      const result = response.data;
      console.log(result);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

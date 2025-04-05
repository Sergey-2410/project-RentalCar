//cars/slice.js

import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations.js';

const initialState = {
  cars: { items: [] },
};

const slice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.cars.items = action.payload;
    });
  },
});

export const carsReducer = slice.reducer;

//filters/slice.js

import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands } from './operations';

const initialState = {
  filters: { brand: '', price: '', mileageFrom: '', mileageTo: '' },
  brands: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFieldValue(state, action) {
      const { field, value } = action.payload;
      state.filters[field] = value;
    },
    clearFilters(state) {
      state.filters = { brand: '', price: '', mileageFrom: '', mileageTo: '' };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBrands.pending, state => {
        state.loading = true;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const filtersReducer = slice.reducer;

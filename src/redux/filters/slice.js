import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: { brand: '', price: '', mileageFrom: '', mileageTo: '' },
};

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {},
});

export const filtersReducer = slice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: { item: [], loading: false, error: null },
};

const slice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
});

export const favoritesReducer = slice.reducer;

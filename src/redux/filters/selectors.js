//filters/selectors.js
export const selectFilters = state => state.filters.filters;
export const selectBrands = state => state.filters.brands;
export const selectIsLoading = state => state.filters.loading;
export const selectIsError = state => state.filters.error;

import { createSlice } from "@reduxjs/toolkit";

export const pageReducer = createSlice({
  name: 'page',
  initialState: {
    value: ''
  },
  reducers: {
    setPage: (state, action) => {state.value = action.payload}
  }
});

export const selectPage = state => state.page.value;

export const { setPage } = pageReducer.actions;

export default pageReducer.reducer;
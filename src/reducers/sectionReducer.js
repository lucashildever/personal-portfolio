import { createSlice } from "@reduxjs/toolkit";

export const sectionReducer = createSlice({
  name: 'section',
  initialState: {
    value: 'hero'
  },
  reducers: {
    setSection: (state, action) => {state.value = action.payload}
  }
});

export const selectSection = state => state.section.value;

export const { setSection } = sectionReducer.actions;

export default sectionReducer.reducer;
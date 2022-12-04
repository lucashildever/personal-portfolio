import { createSlice } from "@reduxjs/toolkit";

export const projectsDataReducer = createSlice({
  name: 'projects',
  initialState: {
    value: []
  },
  reducers: {
    setProjData: (state, action) => {state.value = action.payload}
  }
});

export const selectProjData = state => state.projData.value;

export const { setProjData } = projectsDataReducer.actions;

export default projectsDataReducer.reducer;
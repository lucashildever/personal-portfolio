import { createSlice } from "@reduxjs/toolkit";

export const modeReducer = createSlice({
  name: 'mode',
  initialState: {
    value: false
  },
  reducers: {
    setMode: (state, action) => {state.value = action.payload}
  }
});

export const selectMode = state => state.mode.value;

export const { setMode } = modeReducer.actions;

export default modeReducer.reducer;
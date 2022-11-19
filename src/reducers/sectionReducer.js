import { createSlice } from "@reduxjs/toolkit";

export const sectionReducer = createSlice({
  name: 'section',
  initialState: {
    value: 'home'
  },
  reducers: {
    setHome: state => {state.value = "home"},
    setAbout: state => {state.value = "about"},
    setProjects: state => {state.value = "projects"},
    setContact: state => {state.value = "contact"}
  }
});

export const selectSection = state => state.section.value;

export const { setHome, setAbout, setProjects, setContact } = sectionReducer.actions;

export default sectionReducer.reducer;
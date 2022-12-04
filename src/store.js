import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "./reducers/sectionReducer";
import projectsDataReducer from "./reducers/projectsDataReducer";
import pageReducer from "./reducers/pageReducer";

export default configureStore({
  reducer: {
    section: sectionReducer,
    projData: projectsDataReducer,
    page: pageReducer
  }
})
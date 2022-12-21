import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "./reducers/sectionReducer";
import pageReducer from "./reducers/pageReducer";
import modeReducer from "./reducers/modeReducer";

export default configureStore({
  reducer: {
    section: sectionReducer,
    page: pageReducer,
    mode: modeReducer
  }
})
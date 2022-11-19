import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "./reducers/sectionReducer";

export default configureStore({
  reducer: {
    section: sectionReducer
  }
})
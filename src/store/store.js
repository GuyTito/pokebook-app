import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import themeReducer from "./themeSlice";
import pageReducer from "./pageSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    theme: themeReducer,
    page: pageReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    detailView: false,
    themeModal: false,
  },
  reducers: {
    showDetailView: (state) => {
      state.detailView = true;
    },
    hideDetailView: (state) => {
      state.detailView = false;
    },
    showThemeModal: (state) => {
      state.themeModal = true;
    },
    hideThemeModal: (state) => {
      state.themeModal = false;
    },
  },
});

export const getDetailView = (state) => state.modal.detailView;
export const getThemeModal = (state) => state.modal.themeModal;

export const {
  showDetailView,
  hideDetailView,
  showThemeModal,
  hideThemeModal,
} = modalSlice.actions;
export default modalSlice.reducer;

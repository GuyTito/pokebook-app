import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    detailView: false,
  },
  reducers: {
    showDetailView: (state) => {
      state.detailView = true;
    },
    hideDetailView: (state) => {
      state.detailView = false;
    },
  },
});

export const isDetailView = (state) => state.modal.detailView;

export const { showDetailView, hideDetailView } = modalSlice.actions;
export default modalSlice.reducer;

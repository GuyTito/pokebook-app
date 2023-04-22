import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    pageSize: 8,
  },
  reducers: {
    changePageSize: (state, action) => {
      state.pageSize = action.payload;
    },
  },
});

export const getPageSize = (state) => state.page.pageSize;

export const { changePageSize } = pageSlice.actions;
export default pageSlice.reducer;

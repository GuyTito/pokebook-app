import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeColor: "#de527f",
  },
  reducers: {
    changeTheme: (state, action) => {
      state.themeColor = action.payload;
    },
  },
});

export const getThemeColor = (state) => state.theme.themeColor;

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;

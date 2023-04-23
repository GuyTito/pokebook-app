import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeColor: JSON.parse(localStorage.getItem("poke-theme")) || "#de527f",
  },
  reducers: {
    changeTheme: (state, action) => {
      state.themeColor = action.payload;
      localStorage.setItem("poke-theme", JSON.stringify(state.themeColor));
    },
  },
});

export const getThemeColor = (state) => state.theme.themeColor;

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;

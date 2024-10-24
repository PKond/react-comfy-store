import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  forest: "forest",
  luxury: "luxury",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.forest;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: { username: "coding addict" },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },
    logoutUser: (state, action) => {
      state.user = null;
	  localStorage.removeItem('user');
	  toast.success('Logged out successfully');
    },
    toggleTheme: (state, action) => {
      const {forest, luxury} = themes;
	  state.theme = state.theme === forest? luxury: forest;
	  document.documentElement.setAttribute("data-theme", state.theme);
	  localStorage.setItem('theme', state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;

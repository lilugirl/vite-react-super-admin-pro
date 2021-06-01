import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/shared/store/reducer/rootReducer";

const initialState: any = {
  title: "",
  subtitle: "",
};

export const navSlice = createSlice({
  name: "nav",
  initialState: initialState,
  reducers: {
    setTitle(state, action) {
      console.log("setTitle payload", action);
      state.title = action.payload;
    },
    setSubTitle(state, action) {
      console.log("setsubTitle payload", action);
      state.subtitle = action.payload;
    },
  },
});

export const { setTitle, setSubTitle } = navSlice.actions;
export const selectTitle = (state: RootState) => state.nav.title;
export const selectSubTitle = (state: RootState) => state.nav.subtitle;
export default navSlice.reducer;

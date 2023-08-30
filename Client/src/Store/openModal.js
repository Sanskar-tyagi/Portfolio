import { createSlice } from "@reduxjs/toolkit";

const openSlice = createSlice({
  name: "open",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleOpen } = openSlice.actions;
export default openSlice.reducer;

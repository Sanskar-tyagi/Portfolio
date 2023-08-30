// src/redux/changeBody.js
import { createSlice } from "@reduxjs/toolkit";

const changeBody = createSlice({
  name: "selectedName",
  initialState: {
    selectName: null,
  },
  reducers: {
    selectName: (state, action) => {
      state.selectName = action.payload;
    },
  },
});

export const { selectName } = changeBody.actions;
export default changeBody.reducer;

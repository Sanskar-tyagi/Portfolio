import { createSlice } from "@reduxjs/toolkit";

const User = createSlice({
  name: "User",
  initialState: {
    Name: "",
    Email: "",
  },
  reducers: {
    setName: (state, action) => {
      state.Name = action.payload;
    },
    setEmail: (state, action) => {
      state.Email = action.payload;
    },
  },
});

export const { setName, setEmail } = User.actions;
export default User.reducer;

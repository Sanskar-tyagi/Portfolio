import { configureStore } from "@reduxjs/toolkit";
import changeBody from "./changeBody";
import openModal from "./openModal";
import User from "./UserData";
const store = configureStore({
  reducer: {
    selectedName: changeBody,
    open: openModal,
    User: User,
  },
});

export default store;

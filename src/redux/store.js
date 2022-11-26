import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./register/registerSlice";
import authenticateReducer from "./authentication/authenticateSlice";
import userReducer from "./user/userSlice";

export default configureStore({
  reducer: {
    register: registerReducer,
    authentication: authenticateReducer,
    user: userReducer,
  },
});
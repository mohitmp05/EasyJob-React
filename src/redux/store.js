import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./register/registerSlice";
import authenticateReducer from "./authentication/authenticateSlice";
import userReducer from "./user/userSlice";
import userProfileReducer from "./userProfile/userProfileSlice";
import jobReducer from "./job/jobSlice";

export default configureStore({
  reducer: {
    register: registerReducer,
    authentication: authenticateReducer,
    user: userReducer,
    userProfile: userProfileReducer,
    job: jobReducer,
  },
});
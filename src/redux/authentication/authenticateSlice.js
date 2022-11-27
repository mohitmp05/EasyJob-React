import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  jwt: "",
  error: "",
};

export const authenticateUser = createAsyncThunk(
  "authentication/authenticateUser",
  // () => {
  //   localStorage.setItem(
  //     "jwt",
  //     JSON.stringify(
  //       "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtb2hpdDEyMyIsImV4cCI6MTY2OTU2MTY1NywiaWF0IjoxNjY5NTI1NjU3fQ.VZ-vFE-Rek9oclwQz_PH0BJtuBGzbIQyKXwORG4ZUO0"
  //     )
  //   );
  //   return {
  //     email: "mohit@123",
  //     password: "123",
  //     role: "EMPLOYER",
  //     username: "mohit123",
  //   };
  // }
  (user) => {
    return axios
      .post("http://localhost:7071/user/authenticate", user)
      .then((response) => {
        localStorage.setItem("jwt", JSON.stringify(response.data));
      });
  }
);
const authenticateSlice = createSlice({
  name: "authentication",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(authenticateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.jwt = action.payload;
      state.error = "";
    });
    builder.addCase(authenticateUser.rejected, (state, action) => {
      state.loading = false;
      state.jwt = "";
      state.error = action.error.message;
    });
  },
});

export default authenticateSlice.reducer;

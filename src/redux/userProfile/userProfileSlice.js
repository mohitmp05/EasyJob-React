import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  user: [],
  userProfile: [],
  error: "",
};

export const fetchProfile = createAsyncThunk(
  "user/fetchProfile",
  async (username) => {
    const response = await axios.get(
      "http://localhost:7072/profile/view/" + username
    );
    console.log(response.data);
    return response.data;
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (username, userDetails) => {
    const response = await axios.put(
      "http://localhost:7072/profile/update/" + username,
      userDetails
    );
    console.log(response.data);
    return response.data;
  }
);

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
    });
    builder.addCase(fetchProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.userProfile = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.loading = false;
      state.userProfile = [];
      state.error = action.error.message;
    });
  },
});

export default userProfileSlice.reducer;

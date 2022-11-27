import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  userJob: [],
  error: "",
};


export const fetchAppliedJobs = createAsyncThunk("user/fetchAppliedJobs", async (username) => {
  const response = await axios
    .get("http://localhost:7072/profile/appliedJobs/"+username)
    console.log(response.data)
  return response.data;
});

const jobSlice = createSlice({
  name: "job",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchAppliedJobs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAppliedJobs.fulfilled, (state, action) => {
      state.loading = false;
      state.userJob = action.payload;
      state.error = "";
      state.isLogged = true
    });
    builder.addCase(fetchAppliedJobs.rejected, (state, action) => {
      state.loading = false;
      state.userJob = [];
      state.error = action.error.message;
    });
  },
});

export default jobSlice.reducer;

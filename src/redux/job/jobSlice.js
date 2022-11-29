import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  userJob: [],
  recommendedJobs: [],
  error: "",
};


export const fetchAppliedJobs = createAsyncThunk("job/fetchAppliedJobs", async (username) => {
  const response = await axios
    .get("http://localhost:7072/profile/appliedJobs/"+username)
  return response.data;
});

export const fetchRecommendedJobs = createAsyncThunk("job/fetchRecommendedJobs", async () => {
  const response = await axios
    .get("http://localhost:7071/job/getjobs",{
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("jwt"))}` },
    })
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
    });
    builder.addCase(fetchAppliedJobs.rejected, (state, action) => {
      state.loading = false;
      state.userJob = [];
      state.error = action.error.message;
    });

    builder.addCase(fetchRecommendedJobs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRecommendedJobs.fulfilled, (state, action) => {
      state.loading = false;
      state.recommendedJobs = action.payload;
      state.error = "";
    });
    builder.addCase(fetchRecommendedJobs.rejected, (state, action) => {
      state.loading = false;
      state.recommendedJobs = [];
      state.error = action.error.message;
    });
  },
});

export default jobSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  jobs:[],
  error: "",  
};


export const fetchJobs = createAsyncThunk("employerJob/fetchJobs", async () => {
  const response = await axios
    .get("http://localhost:7071/job/getjobbyusername",{
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("jwt"))}` },
    })
  return response.data;
});

export const addJobDetails = createAsyncThunk("employerJob/addJobDetails", async (job) => {
  const response = await axios
    .put("http://localhost:7071/job/addjob",job,{
      headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem("jwt"))}` },
    })
  return response.data;
});

const employerjobSlice = createSlice({
  name: "employerJob",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchJobs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchJobs.fulfilled, (state, action) => {
      state.loading = false;
      if (typeof action.payload ==="string") {
        state.jobs=[];
      }else{
        state.jobs = action.payload;
      }
      state.error = "";
    });
    builder.addCase(fetchJobs.rejected, (state, action) => {
      state.loading = false;
      state.jobs = [];
      state.error = action.error.message;
    });

    builder.addCase(addJobDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addJobDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
    });
    builder.addCase(addJobDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default employerjobSlice.reducer;

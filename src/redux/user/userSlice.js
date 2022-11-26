import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  user: [],
  error: "",
};

export const fetchUser = createAsyncThunk("user/fetchUser", async (token) => {
  const response = await axios
    .get("http://localhost:7071/user/getuser", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data));
    });
  return response.data;
});
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;

// src/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.users = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default userSlice.reducer;

export const selectAllUsers = (state) => state.users.users;
export const selectUserStatus = (state) => state.users.status;
export const selectError = (state) => state.users.error;

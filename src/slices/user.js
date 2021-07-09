import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_BASE_URL } from "../utils/consts";

const initialState = {
  loading: false,
  users: null
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (number) => {
    try {
      const { data } = await axios.get(`${API_BASE_URL}?results=${number}`);
      console.log(data);
      return data.results;
    } catch (err) {
      console.error(err);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUser(state, action) {}
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      });
  }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

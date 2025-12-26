import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = createAsyncThunk("user/registerUser", async (payload, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`${API_URL}/api/v1/register`, payload);
    console.log("Api_User_Data:", data);
    return data;
  } catch (error) {
    return rejectWithValue(error.response?.data.message);
  }
});

export const loginUser = createAsyncThunk("user/loginUser", async (payload, { rejectWithValue }) => {
  try {
    const { data } = await axios.post(`${API_URL}/api/v1/login`, payload);
    console.log("Api_Login_Data:", data);
    return data;
  } catch (error) {
    return rejectWithValue(error.response?.data.message);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    error: null,
    user: null,
    loading: false,
    message: null,
    success: false,
  },
  reducers: {
    removeError: function (state) {
      state.error = null;
    },
    removeMessage: function (state) {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    // Register
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
      state.success = false;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log("action:", action);

      // state.user = action.payload.user;
      state.message = action.payload.message;
      state.success = true;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      //console.log(action.payload);

      state.loading = false;
      state.error = action.payload || "Something went wrong";
    });

    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log("action:", action);

      state.user = action.payload.user;
      state.message = action.payload.message;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Something went wrong";
    });
  },
});

export const { removeError, removeMessage } = userSlice.actions;
export default userSlice.reducer;

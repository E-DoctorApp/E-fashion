import { createSlice, createAsyncThunk, createAction, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


interface SignInState {
  loading: boolean;
  error: string | null;
  user: object,
  type: string,
  isAuthenticated: boolean,
}
const initialState: SignInState = {
  loading: false,
  error: null,
  type: "",
  isAuthenticated: false,
  user: {},
};
export const getUser = createAsyncThunk("signin/getUser", async () => {
  try {
    const token = localStorage.getItem("token")
    const response = await axios.get("http://localhost:5000/api/users/getOne", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
    // Assuming your API returns user data upon successful signup
  } catch (error) {
    // Handle error and reject the promise with the error message
    return "Signin failed";
  }
});

export const signinUser = createAsyncThunk("signin/signinUser", async (formData: object) => {
  try {
    const response = await axios.post("http://localhost:5000/api/users/login", formData);
    // Assuming your API returns user data upon successful login      
    return response.data;
    // Assuming your API returns user data upon successful signup
  } catch (error) {
    // Handle error and reject the promise with the error message
    return "Signin failed";
  }
});
export const getUserSlice = createSlice({
  name: "getUser",
  initialState: {
    loading: false,
    error: null,
    user: {},
    isAuthenticated: false
  },
  reducers: {
    logout: (state) => {
      state.loading = false;
      state.error = null;
      state.user = {}
      localStorage.removeItem("token");
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload
      state.isAuthenticated = true
    })
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
    });
  },
});
const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signinUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    builder.addCase(signinUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.isAuthenticated = true
      localStorage.setItem("token", action.payload.token)
    })
    builder.addCase(signinUser.rejected, (state, action) => {
      state.loading = false;
    });
  },
});
export default { signIn: signInSlice.reducer, currentUser: getUserSlice.reducer }
export const  { logout }=getUserSlice.actions
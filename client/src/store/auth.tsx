// signUpSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface SignUpState {
  loading: boolean;
  error: string | null;
  
}

const initialState: SignUpState = {
    loading: false,
    error: null,
   
};


// Async Thunk for Signup
export const signupUser = createAsyncThunk("signup/signupUser", async (formData: object) => {
    try {
      const response = await axios.post("http://localhost:5000/api/users/register", formData);
      return response.data; // Assuming your API returns user data upon successful signup
    } catch (error) {
      return "Signup failed";
    }
  });

 
  const signUpSlice = createSlice({
    name: "signUp",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      });
      builder.addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
      });
    },
  });
  
  
export default signUpSlice.reducer
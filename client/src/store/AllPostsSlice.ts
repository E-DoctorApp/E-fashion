import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchposts = createAsyncThunk('fetchposts', async (userId:number) => {
    try {
        console.log(userId);
        
        const response = await axios.get(`http://localhost:5000/api/posts/getAll/${userId}`);
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        return error
    }
});




export const allPosts = createSlice({
    name: 'allPosts',
    initialState: {
        posts: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchposts.fulfilled, (state, action) => {
            state.posts = action.payload;
        })

    }
})


export default allPosts.reducer;
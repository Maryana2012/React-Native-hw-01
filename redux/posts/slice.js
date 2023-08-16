import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts, getAllComments } from "./operation";

const initialState = {
    posts: [],
    comments:[]
}

const handleGetPostsFulfilled = (state, action) => {
    state.posts = action.payload;
};

const handleGetComments = (state, action) => {
    state.comments = action.payload;
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllPosts.fulfilled, handleGetPostsFulfilled);
        builder.addCase(getAllComments.fulfilled, handleGetComments);
    },

});

export const postsReducer = postsSlice.reducer;

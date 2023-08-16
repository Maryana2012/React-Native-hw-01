import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'; 
import { db } from '../../config';

export const getAllPosts = createAsyncThunk(
    "posts/getPosts",
    async () => {
        try {
            const data = await getDocs(collection(db, 'posts'));
            const posts = [];
            data.forEach((post) => { posts.push(post.data()) });
            posts.sort((firstPost, secondPost) => secondPost.createdDate - firstPost.createdDate);
            return posts;
        } catch (error) {
            console.log(error.message)
        }
    }
) 

export const getAllComments = createAsyncThunk(
    "comments/getComments",
    async () => {
        try {
            const data = await getDocs(collection(db, 'comments'));
            const comments = [];
            data.forEach((comment) => { comments.push(comment.data()) });
            comments.sort((firstComment, secondComment) => firstComment.currentDate - secondComment.currentDate);
            return comments;

        } catch (error) {
            console.log(error.message);
        }
    }
)



    

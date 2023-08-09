import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
    signOut,
currentUser
} from "firebase/auth";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from "../../config";


export const register = createAsyncThunk(
    "auth/setUser",
    async ({email, password, login, photo}) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const { user } = userCredential;
            const upload = {
                displayName: login,
                photoURL: photo}
            await updateProfile(user,upload);
            const userNew = {
                  email: user.email,
                  id: user.uid,
                  token: user.stsTokenManager.accessToken, 
                  displayName: user.displayName,
                  photoURL: user.photoURL
            }
            console.log(userNew)
            return userNew;
        } catch (error) {
            console.log(error.message)
        }
    }
);



export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const { user } = userCredential;
            console.log(user)
            const newUser = {
                email: user.email,
                id: user.uid,
                token: user.stsTokenManager.accessToken,
                displayName: user.displayName,
                photoURL: user.photoURL
            }
            return newUser;  
       } catch (error) {
         console.log(error.message)
       } 
    }

);

export const remove = createAsyncThunk(
    "auth/remove",
    async() => {
        try {
            signOut(auth);
        }
        catch(error) {console.log(error)}
    }
) 




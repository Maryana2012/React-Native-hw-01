import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from "../../config";
// import {useAuth} from "../../hooks/use-auth"

export const register = createAsyncThunk(
    "auth/setUser",
    async ({email, password}) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const { user } = userCredential;
            const userNew = {
                  email: user.email,
                  id: user.uid,
                  token: user.stsTokenManager.accessToken
            }
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
            const newUser = {
                 email: user.email,
                 id: user.uid,
                 token: user.stsTokenManager.accessToken
            }
            return newUser;  
       } catch (error) {
         console.log(error.message)
       } 
    }

) 

export const remove = createAsyncThunk(
    "auth/remove",
    async() => {
        try {
            signOut(auth);
        }
        catch(error) {console.log(error)}
    }
) 



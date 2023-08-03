import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../../config";
import { createAsyncThunk } from '@reduxjs/toolkit'

export const setUser = createAsyncThunk(
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



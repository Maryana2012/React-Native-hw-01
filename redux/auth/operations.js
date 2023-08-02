// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   updateProfile,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../../config";
// import { createAsyncThunk } from '@reduxjs/toolkit'

// export const register = createAsyncThunk(
//     "auth/register",
//     async ({ login, email, password }) => {
//             // console.log(auth)
//         try {
//             const userCredential = await createUserWithEmailAndPassword(auth,email,password);
//             console.log(userCredential)
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
// );



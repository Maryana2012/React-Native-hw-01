import { createSlice } from "@reduxjs/toolkit";
import { register,loginUser, remove, updateUser } from "./operations";


const initialState= {
    login: null,
    email: null,
    password: null,
    token: null,
    id: null,
    photo:null
}

// const handlePending = (state, action) => {
//     console.log(state)
//       console.log("pendding")  
// }

// const handleFulfilled = (state, action) => {
//      console.log(state)
//     console.log("fulfilled")
// }

// const handleRejected = (state, action) => {
//      console.log(state)
//     console.log("error")
// }

export const authSlice = createSlice({
    name: "user",
    initialState: initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.login = action.payload.displayName;
            state.photo = action.payload.photoURL
          
           },
        [loginUser.fulfilled](state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.login = action.payload.displayName,
            state.photo = action.payload.photoURL    
        },
        [loginUser.error](state, action) {
            console.log(error)
        },
        [remove.fulfilled](state) {
            state.email = null;
            state.token = null;
            state.id = null;           
        },
        // [updateUser.fulfilled](state, action) {
        //     state.login = action.payload;
            // console.log(action.payload)
            // console.log("slice ok")
                     
        // }
    }
//     extraReducers: (builder) => {
//         builder
//         // .addCase(register.pending, handlePending)
//         .addCase(register.fulfilled, handleFulfilled)
//         .addCase(register.rejected, handleRejected)
//         // .addCase(login.pending, handlePending)
//         .addCase(loginUser.fulfilled, handleFulfilled)
//         .addCase(loginUser.rejected, handleRejected)
//         // .addCase(remove.fulfilled, handleFulfilled)
//         .addCase(remove.fulfilled, handleFulfilled)
//         .addCase(remove.rejected, handleRejected)
// }
    

});

export const authReducer = authSlice.reducer;
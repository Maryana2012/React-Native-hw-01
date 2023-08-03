import { createSlice } from "@reduxjs/toolkit";
import { setUser,removeUser } from "./operations";


const initialState= {
    email: null,
    password: null,
    login: null,
    token: null,
    id: null
}

// const handlePending = (state, action) => {
//       console.log("pendding")  
// }

// const handleFulfilled = (state, action) => {
//     console.log("fulfilled")
// }

// const handleRejected = (state, action) => {
//     console.log("error")
// }

export const authSlice = createSlice({
    name: "user",
    initialState: initialState,
    extraReducers: {
        [setUser.fulfilled](state, action) {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id
            },
        // [removeUser.fulfilled](state) {
        //     state.email = null;
        //     // state.password = null;
        //     state.token = null;
        //     state.id = null
        // }
    }
//     extraReducers: (builder) => {
//         builder
//         .addCase(setUser.pending, handlePending)
//         .addCase(setUser.fulfilled, handleFulfilled)
//         .addCase(setUser.rejected, handleRejected)
//         .addCase(removeUser.pending, handlePending)
//         .addCase(removeUser.fulfilled, handleFulfilled)
//         .addCase(removeUser.rejected, handleRejected)
// }
    

});

// export const {setUser, removeUser } = authSlice;
export const authReducer = authSlice.reducer;
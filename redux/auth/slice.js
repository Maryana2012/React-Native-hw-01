import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operations";


const initialState= {
    email: null,
    password: null,
    login: null,
    token: null,
    id: null
}

const handlePending = (state, action) => {
    //   console.log("pendding")  
}

const handleFulfilled = (state, action) => {
    // console.log("fulfilled")
}

const handleRejected = (state, action) => {
    // console.log("error")
}

export const authSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email;
            // state.password = action.payload.password;
            state.token = action.payload.token;
            state.id = action.payload.id
            },
        removeUser(state) {
            state.email = null;
            // state.password = null;
            state.token = null;
            state.id = null
        }
    }
    // extraReducers: (builder) => {
    //     builder
    //     .addCase(register.pending, handlePending)
    //     .addCase(register.fulfilled, handleFulfilled)
    //     .addCase(register.rejected, handleRejected)
    //     .addCase(login.pending, handlePending)
    //     .addCase(login.fulfilled, handleFulfilled)
    //     .addCase(login.rejected, handleRejected)
// }
    

});

export const {setUser, removeUser } = authSlice;
export const authReducer = authSlice.reducer;
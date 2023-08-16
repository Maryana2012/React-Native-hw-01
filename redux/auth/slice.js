import { createSlice } from "@reduxjs/toolkit";
import { register,loginUser, remove} from "./operations";


const initialState= {
    login: null,
    email: null,
    password: null,
    token: null,
    id: null,
    photo:null
}

const handleRegisterFulfilled = (state, action) => {
    state.email = action.payload.email;
    state.token = action.payload.token;
    state.id = action.payload.id;
    state.login = action.payload.displayName;
    state.photo = action.payload.photoURL
}

const handleLoginUserFulfilled = (state, action) => {
    state.email = action.payload.email;
    state.token = action.payload.token;
    state.id = action.payload.id;
    state.login = action.payload.displayName,
    state.photo = action.payload.photoURL    
}

const handleRemove = (state, action) => {
    state.email = null;
    state.token = null;
    state.id = null;    
}

export const authSlice = createSlice({
    name: "user",
    initialState: initialState,     
    extraReducers: (builder) => {
        builder
        .addCase(register.fulfilled, handleRegisterFulfilled)
        .addCase(loginUser.fulfilled, handleLoginUserFulfilled)
        .addCase(remove.fulfilled, handleRemove)
     
    }
});

export const authReducer = authSlice.reducer;
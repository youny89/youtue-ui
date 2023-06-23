import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: null
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers : {
        loginStart: state => {
            state.loading = true
        },
        loginSuccess: (state, action ) => {
            state.loading = false
            state.currentUser = action.payload
        },
        loginFail: (state,action) => {
            state.loading = false
            state.error = action.payload
            state.currentUser = null
        },
        logout: state => {
            state.currentUser = null
            state.loading = false
            state.error = false 
        } 
    }
});

export const {
    loginStart,
    loginSuccess,
    loginFail,
    logout
} = userSlice.actions;

export default userSlice.reducer;
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
        },
        updateCurrentUser: (state, action) => {
            state.loading = false
            state.error = null;
            state.currentUser = action.payload
        },
        subscribed: (state, action) => {
            state.currentUser.subscribedUsers = [...state.currentUser.subscribedUsers, action.payload] 
            state.loading = false
            state.error = false 
        },
        unSubscribed: (state, action) => {
            state.currentUser.subscribedUsers = state.currentUser.subscribedUsers.filter(id=> id !== action.payload) 
            state.loading = false
            state.error = false 
        },
    }
});

export const {
    loginStart,
    loginSuccess,
    loginFail,
    logout,
    subscribed,
    unSubscribed,
    updateCurrentUser
} = userSlice.actions;

export default userSlice.reducer;
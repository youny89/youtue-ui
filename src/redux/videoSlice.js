import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loadedVideo:null,
    loading: false,
    error:false
}

const videoSlice = createSlice({
    name:"video",
    initialState,
    reducers : {
        startFetch : (state) => {
            state.loading = true;
        },
        successFetch : (state, action) => {
            state.loading = false;
            state.loadedVideo = action.payload;
        },
        failFetch : (state) => {
            state.loading = false;
            state.loadedVideo = null;
            state.error = true
        },
        like : (state,action) => {
            if(state.loadedVideo.likes.includes(action.payload)) {
                state.loadedVideo.likes.splice(state.loadedVideo.likes.findIndex(i=> i==action.payload ), 1);
            }else {
                state.loadedVideo.likes.push(action.payload);
            }
        },
        disLike:(state, action) => {
            if(state.loadedVideo.disLikes.includes(action.payload)) {
                state.loadedVideo.disLikes.splice(state.loadedVideo.disLikes.findIndex(i=> i === action.payload ), 1);
            } else {
                state.loadedVideo.disLikes.push(action.payload);
            }
        }
    }
});

export const {
    startFetch,
    successFetch,
    failFetch,
    like,
    disLike
} = videoSlice.actions;
export default videoSlice.reducer;
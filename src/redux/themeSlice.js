import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    dark:true
}

const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers : {
        setMode : (state) => {
            state.dark = !state.dark; 
        }
    }
});

export const { setMode } = themeSlice.actions;
export default themeSlice.reducer
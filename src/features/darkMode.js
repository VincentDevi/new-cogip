import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: {value: true},
    reducers: {
      switchMode : (state, action)=>{
        state.value = !state.value
      },
    },
});

export const {switchMode} = darkModeSlice.actions;
export default darkModeSlice.reducer;
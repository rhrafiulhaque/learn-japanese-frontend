import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedVocubulary: null,
};

const vocubularySlice = createSlice({
    name: "vocubulary",
    initialState,
    reducers: {
        setVocubularyLesson: (state, action) => {
            state.selectedVocubulary = action.payload;
        },
        clearVocubularyLesson: (state) => {
            state.selectedVocubulary = null;
        },
    },
});

export const { setVocubularyLesson, clearVocubularyLesson } = vocubularySlice.actions;
export default vocubularySlice.reducer;

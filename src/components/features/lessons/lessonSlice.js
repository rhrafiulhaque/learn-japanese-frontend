import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedLesson: null,
};

const lessonSlice = createSlice({
    name: "lesson",
    initialState,
    reducers: {
        setSelectedLesson: (state, action) => {
            state.selectedLesson = action.payload;
        },
        clearSelectedLesson: (state) => {
            state.selectedLesson = null;
        },
    },
});

export const { setSelectedLesson, clearSelectedLesson } = lessonSlice.actions;
export default lessonSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedTutorial: null,
};

const tutorialSlice = createSlice({
    name: "tutorial",
    initialState,
    reducers: {
        setSelectedTutorial: (state, action) => {
            state.selectedTutorial = action.payload;
        },
        clearSelectedTutorial: (state) => {
            state.selectedTutorial = null;
        },
    },
});

export const { setSelectedTutorial, clearSelectedTutorial } = tutorialSlice.actions;
export default tutorialSlice.reducer;

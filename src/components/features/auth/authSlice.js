import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: null,
    refreshToken: null,
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.user = action.payload.user;
        },

        userLoggedOut: (state) => {
            state.accessToken = null,
                state.refreshToken = null,
                state.user = null
        }
    }
})
export default authSlice.reducer;
export const { userLoggedIn, userLoggedOut } = authSlice.actions;

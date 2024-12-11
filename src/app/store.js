import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../components/features/api/apiSlice";
import authSliceReducer from "../components/features/auth/authSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,

    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
})

export default store
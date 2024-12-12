import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../components/features/api/apiSlice";
import authSliceReducer from "../components/features/auth/authSlice";
import lessonSliceReducer from "../components/features/lessons/lessonSlice";
import vocubularySliceReducer from "../components/features/lessons/vocubularySlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        lesson: lessonSliceReducer,
        vocubulary: vocubularySliceReducer

    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
})

export default store
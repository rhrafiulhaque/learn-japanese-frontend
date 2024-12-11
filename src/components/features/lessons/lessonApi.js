import { apiSlice } from "../api/apiSlice";


export const lessonApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllLessons: builder.query({
            query: () => '/lesson'
        }),
        getLessonByLessonNo: builder.query({
            query: (lessonNo) => `/vocabulary/${lessonNo}`,
            providesTags: (result, error, lessonNo) => [{ type: 'Vocabulary', id: lessonNo }]
        }),

    })
})

export const { useGetAllLessonsQuery, useGetLessonByLessonNoQuery } = lessonApi
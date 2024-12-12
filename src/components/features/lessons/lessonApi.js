import { apiSlice } from "../api/apiSlice";


export const lessonApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllLessons: builder.query({
            query: () => '/lesson',
            providesTags: ['Lesson']
        }),
        getAllVocabularies: builder.query({
            query: () => '/vocabulary',
            providesTags: ['Vocabularies']
        }),
        getLessonByLessonNo: builder.query({
            query: (lessonNo) => `/vocabulary/${lessonNo}`,
            providesTags: (result, error, lessonNo) => [{ type: 'Vocabulary', id: lessonNo }]
        }),

    })
})

export const { useGetAllLessonsQuery, useGetLessonByLessonNoQuery, useGetAllVocabulariesQuery } = lessonApi
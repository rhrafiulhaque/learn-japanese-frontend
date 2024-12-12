import { apiSlice } from "../api/apiSlice";

export const adminLessonApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addByAdminLesson: builder.mutation({
            query: (data) => ({
                url: `/lesson/add`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Lesson']
        }),
        addByAdminVocabulary: builder.mutation({
            query: (data) => ({
                url: `/vocabulary/add`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Lesson']
        }),
        updateByAdminVocabularyById: builder.mutation({
            query: ({ vocId, data }) => ({
                url: `/vocabulary/${vocId}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ['Vocabularies']
        }),
        deleteByAdminVocabulary: builder.mutation({
            query: (vocId) => ({
                url: `/vocabulary/${vocId}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Vocabularies']
        }),

        updateLessonByAdmin: builder.mutation({
            query: ({ lessonId, data }) => ({
                url: `/lesson/${lessonId}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ['Lesson']
        }),
        deleteLessonByAdmin: builder.mutation({
            query: (lessonId) => ({
                url: `/lesson/${lessonId}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Lesson']
        }),
    }),

})

export const { useAddByAdminLessonMutation, useAddByAdminVocabularyMutation, useUpdateByAdminVocabularyByIdMutation, useDeleteByAdminVocabularyMutation, useUpdateLessonByAdminMutation, useDeleteLessonByAdminMutation } = adminLessonApi
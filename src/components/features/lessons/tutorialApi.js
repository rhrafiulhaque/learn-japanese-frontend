import { apiSlice } from "../api/apiSlice";

export const tutorialApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addByAdminTutorial: builder.mutation({
            query: (data) => ({
                url: `/tutorial/add`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Tutorial']
        }),
        updateByAdminTutorialById: builder.mutation({
            query: ({ tutorialId, data }) => ({
                url: `/tutorial/${tutorialId}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ['Tutorial']
        }),
        deleteByAdminTutorial: builder.mutation({
            query: (tutorialId) => ({
                url: `/tutorial/${tutorialId}`,
                method: "DELETE"
            }),
            invalidatesTags: ['Tutorial']
        }),
        getAllTutorials: builder.query({
            query: () => '/tutorial',
            providesTags: ['Tutorial']
        }),
        getTutorialsById: builder.query({
            query: (tutorialId) => `/tutorial/${tutorialId}`,
            providesTags: ['Tutorial']
        }),

    }),

})

export const { useAddByAdminTutorialMutation, useGetTutorialsByIdQuery, useUpdateByAdminTutorialByIdMutation, useDeleteByAdminTutorialMutation, useGetAllTutorialsQuery } = tutorialApi
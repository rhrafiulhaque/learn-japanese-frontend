import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: (data) => ({
                url: "/user/register",
                method: "POST",
                body: data,
            }),
        }),
        login: builder.mutation({
            query: (data) => ({
                url: "/user/login",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    const tokens = result.data.data.tokens;
                    const user = result.data.data.user;

                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: tokens.accessToken,
                            refreshToken: tokens.refreshToken,
                            user: user,
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: tokens.accessToken,
                            refreshToken: tokens.refreshToken,
                            user: user,
                        })
                    );

                } catch (err) {

                }
            }

        }),
        getAllUsers: builder.query({
            query: () => '/user/allusers',
            providesTags: ['Users']
        }),
        updateUserRole: builder.mutation({
            query: ({ userId, data }) => ({
                url: `/user/update-user-role/${userId}`,
                method: "PATCH",
                body: data
            }),
            invalidatesTags: ['Users']
        }),


    })
})

export const { useLoginMutation, useSignupMutation, useGetAllUsersQuery, useUpdateUserRoleMutation } = authApi
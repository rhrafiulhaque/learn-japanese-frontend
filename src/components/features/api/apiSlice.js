import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { userLoggedIn, userLoggedOut } from '../auth/authSlice';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    tagTypes: ['Vocabulary', 'Lesson', 'Vocabularies', 'Users'],
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.accessToken;
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {

        const state = api.getState();
        const refreshToken = state.auth.refreshToken;

        if (!refreshToken) {

            api.dispatch(userLoggedOut());
            localStorage.removeItem('auth');
            return result;
        }


        const refreshResult = await baseQuery(
            {
                url: '/auth/refresh-token',
                method: 'POST',
                body: { refreshToken },
            },
            api,
            extraOptions
        );

        if (refreshResult?.data) {
            const { accessToken, refreshToken: newRefreshToken } = refreshResult.data.data;
            const user = state.auth.user;


            api.dispatch(
                userLoggedIn({
                    accessToken,
                    refreshToken: newRefreshToken,
                    user,
                })
            );


            localStorage.setItem(
                'auth',
                JSON.stringify({
                    accessToken,
                    refreshToken: newRefreshToken,
                    user,
                })
            );


            result = await baseQuery(args, api, extraOptions);
        } else {

            api.dispatch(userLoggedOut());
            localStorage.removeItem('auth');
        }
    }

    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({}), // Add endpoints as needed
});

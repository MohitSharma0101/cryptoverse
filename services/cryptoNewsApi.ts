import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '9638deec3cmsh811d21acc4471afp1549b8jsn9578c9588ad6',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news'

const createRequest = (url: string) => ({ url, headers: headers })

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getNews: builder.query({
            query: ({ q, count }) => createRequest(`/search?q=${q}&count=${count}`)
        })
    })
})


export const {
    useGetNewsQuery,
} = newsApi;
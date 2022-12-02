import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const invoiceApi = createApi({
    reducerPath:"invoiceApi",
    baseQuery: fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
    endpoints: (builder) => ({
        getAllInvoices: builder.query({
            query: () => "invoice",
        }) ,
    }),
});


export const {useGetAllInvoicesQuery} = invoiceApi;
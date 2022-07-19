import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const employeeApi = createApi({
reducerPath: 'employeeApi',
baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
endpoints: (builder) => ({

GetAllEmployee: builder.query({
query: () => `employee`,
providesTags:["employee"]
}),
GetEmployeeById: builder.query({
    query: (id) => `employee/${id}`,
}),
CreateEmployee: builder.mutation({
    query: (formvalues) => ({
    url: `employee`,
    method: 'POST',
    body:formvalues
  }),
  invalidatesTags:["employee"]
}),
UpdateEmployee: builder.mutation({
    query: ({id,params}) => ({
    url: `employee/${id}`,
    method: 'PUT',
    body:params
  }),
  invalidatesTags:["employee"]
}),
DeleteEmployee: builder.mutation({
    query: (id) => ({
    url: `employee/${id}`,
    method: 'DELETE',
    // body:
  }),
  invalidatesTags:["employee"]
}),

})
})

export const { useGetAllEmployeeQuery, useCreateEmployeeMutation, useDeleteEmployeeMutation, useGetEmployeeByIdQuery, useUpdateEmployeeMutation} = employeeApi
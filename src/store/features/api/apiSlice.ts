import { IProduct } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// ! RTk Query method can only use in Client side component
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Product", "User", "Category", "Blog"],
  endpoints: (builder: any) => ({
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["User"],
    }),
    getUser: builder.query({
      query: (id: any) => `/users/${id}`,
    }),
    createUser: builder.mutation({
      query: (body: any) => ({
        url: "/users",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...body }: { id: string; body: any }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id: string) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["Product"],
    }),
    getProductsByPage: builder.query({
      query: (skip: number, limit: number) =>
        `/products?skip=${skip}&limit=${limit}`,
      providesTags: ["Product"],
    }),
    getProduct: builder.query({
      query: (id: string) => `/products/${id}`,
    }),
    createProduct: builder.mutation({
      query: (body: IProduct) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...body }: { id: string; body: IProduct }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    getCategories: builder.query({
      query: () => "/products/categories",
      providesTags: ["Category"],
    }),
    getCategory: builder.query({
      query: (id: any) => `/categories/${id}`,
    }),
    createCategory: builder.mutation({
      query: (body: any) => ({
        url: "/categories",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: builder.mutation({
      query: ({ id, ...body }: { id: string; body: any }) => ({
        url: `/categories/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation({
      query: (id: any) => ({
        url: `/categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
    getBlogs: builder.query({
      query: () => "/blogs",
      providesTags: ["Blog"],
    }),
    getBlog: builder.query({
      query: (id: any) => `/blogs/${id}`,
    }),
    createBlog: builder.mutation({
      query: (body: any) => ({
        url: "/blogs",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Blog"],
    }),
    updateBlog: builder.mutation({
      query: ({ id, ...body }: { id: string; body: any }) => ({
        url: `/blogs/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetProductsQuery,
  useGetProductsByPageQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetBlogsQuery,
  useGetBlogQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
} = api;

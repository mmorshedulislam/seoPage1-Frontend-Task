import apiSlice from "../apiSlice";

const uploadApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    storePhotos: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `/api/files/upload`,
        body: data,
      }),
      invalidatesTags: ["Upload"],
    }),
    getCount: builder.query({
      query: () => ({
        method: "GET",
        url: `/api/files/count`,
      }),
      providesTags: ["Upload"],
    }),
    deletePhoto: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `/api/files/${id}`,
      }),
      invalidatesTags: ["Upload"],
    }),
    updatePhoto: builder.mutation({
      query: ({ id, data }) => ({
        method: "PUT",
        url: `/api/files/${id}`,
        body: data,
      }),
      invalidatesTags: ["Upload"],
    }),
  }),
});

export const { useStorePhotosMutation, useGetCountQuery } = uploadApi;

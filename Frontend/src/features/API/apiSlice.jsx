import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_REACT_APP_PORT,
  }),
  endpoints: (builder) => ({}),
  tagTypes: ["Upload"],
});

export default apiSlice;

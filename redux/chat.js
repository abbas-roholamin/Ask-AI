/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Constants from "expo-constants";

const API_KEY = Constants.manifest.extra.API_KEY;

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Answare"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openai80.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", API_KEY);
      headers.set("X-RapidAPI-Host", "openai80.p.rapidapi.com");
      headers.set("content-type", "application/json");

      return headers;
    },
  }),
  endpoints: (builder) => ({
    ask: builder.mutation({
      query: (payload) => ({
        url: `chat/completions`,
        method: "POST",
        body: {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "user",
              content: payload,
            },
          ],
        },
      }),
      invalidatesTags: ["Answare"],
    }),
  }),
});

export const { useAskMutation } = api;

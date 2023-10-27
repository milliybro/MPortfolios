import createQuery from "../query";

export const portfolioQuery = createQuery({
  reducerPath: "portfolio",
  // tagTypes: ["portfolios"],
  endpoints: (builder) => ({
    getPortfolios: builder.query({
      query: (params) => ({
        method: "GET",
        url: "portfolios",
        params,
      }),
      // query: () => "portfolios",
      transformResponse: (res) => ({
        portfolios: res.data.map((el) => ({ ...el, key: el._id })),
        total: res.pagination.total,
      }),
      // providesTags: ["portfolios"],
    }),
    getPortfolio: builder.mutation({
      query: (id) => ({
        method: "GET",
        url: `portfolios/${id}`,
      }),
      // invalidatesTags: ["portfolios"],
    }),
    createPortfolio: builder.mutation({
      query: (body) => ({
        method: "POST",
        url: "portfolios",
        body,
      }),
      // invalidatesTags: ["portfolios"],
    }),
    updatePortfolio: builder.mutation({
      query: ({ id, body }) => ({
        method: "PUT",
        url: `portfolios/${id}`,
        body,
      }),
      // invalidatesTags: ["portfolios"],
    }),
    deletePortfolio: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `portfolios/${id}`,
      }),
      // invalidatesTags: ["portfolios"],
    }),
    uploadPhoto: builder.mutation({
      query: (body) => ({
        method: "POST",
        url: "upload",
        body,
      }),
    }),
  }),
});

const { reducer: portfolioReducer, reducerPath: portfolioName } =
  portfolioQuery;

export { portfolioQuery as default, portfolioName, portfolioReducer };

export const {
  useGetPortfoliosQuery,
  useUploadPhotoMutation,
  useCreatePortfolioMutation,
  useGetPortfolioMutation,
  useUpdatePortfolioMutation,
  useDeletePortfolioMutation,
} = portfolioQuery;

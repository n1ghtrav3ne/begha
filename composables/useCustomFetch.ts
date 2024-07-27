export const useCustomFetch = (url: string, options: object) => {
  return useFetch(url, {
    ...options,
    baseURL: useRuntimeConfig().public.baseURL,
    // headers: { Authorization: `Bearer nnn` },
    onRequest({ request, options }) {
      // Set the request headers
      options.headers = { Authorization: `Bearer nnn` };
    },
    onRequestError({ request, options, error }) {
      // Handle the request errors
    },
    onResponse({ request, response, options }) {
      // Process the response data
      // localStorage.setItem("token", response._data.token);
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
    },
  });
};

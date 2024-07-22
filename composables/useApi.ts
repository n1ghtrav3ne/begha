

export const useApi = (path: string, opts: any) => {


    const config = useRuntimeConfig();

    let baseURL = config.public.appUrl

    let options = {
        watch: false,
        ...opts,
        baseURL: baseURL,
        query: {
            ...opts?.query
        },
        headers: {
            'Accept': 'application/json',
            'Cache-Control': 'no-cache',
            "Access-Control-Allow-Origin": '*',
            'Authorization': 'Bearer ',
            ...opts?.headers,
        },
        onResponseError(context: any) {
            // if (!toast) return;
            const responseData = context.response._data;
            if (context.response.status == 500) {
                useRouter().replace({ path: '/error/500' })
            }
            if (context.response.status == 429) {
                useRouter().replace({ path: '/error/unknown' })
            }
            if (context.response.status == 401) {
                useRouter().replace({ path: '/auth' })
            }
            if (typeof responseData === 'string') {
                // Handle non-JSON response
                // toast.error(responseData);
            } else {
                // Handle JSON response
                const errorMessage = responseData?.message || context.response?.statusText || context.error;
                // toast.error(errorMessage);
            }
        }
    };

    if (!options.onResponse) {
        options.onResponse = (context: any) => {
            // if (!toast || !context.response._data?.message || context.response.status != 200) return;
        }
    };


    return useFetch(`/${path}`, options);
}

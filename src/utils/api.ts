interface FetchOptions extends RequestInit  {
    params?: Record<string, string>;
}

export const fetchApi = async <T>(
    endpoint: string,
    options: FetchOptions = {}
): Promise <T> => {
    const { params, ...init } = options;
    const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`);

    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.append(key,value);
        })
    }

    const response = await fetch(url.toString(), {
        ...init,
        headers: {
            "Content-Type": "application/json",
            ...init.headers,
        }
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "API request failed");
    }

    return response.json();
};
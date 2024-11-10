export interface ApiResponse<T> {
    data?: T;
    error?: {
        code: string;
        message: string;
        details?: unknown;
    };
    meta?: {
        page?: number;
        limit?: number;
        total?: number;
        totalPages?: number
    };
}

export interface PaginatedResponse<T> {
    items: T[];
    meta: {
        page: number;
        limit: number;
        pages: number;
        totalPages: number;
    }
}
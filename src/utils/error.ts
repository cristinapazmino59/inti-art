export class AppError extends Error {
    constructor(
        public message: string,
        public code: string,
        public status: number = 400,
    ) {
        super(message);
        this.name = "AppError";
    }
}

export const handleError = (error: unknown) => {
    if (error instanceof AppError) {
        return {
            message: error.message,
            code: error.code,
            status: error.status
        };
    }

    if (error instanceof Error) {
        return {
            message: "An unknown error ocurred",
            code: "UNKNOWN ERROR",
            status: 500,
        };
    }
};
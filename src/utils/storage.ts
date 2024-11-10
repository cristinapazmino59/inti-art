export const storage = {
    get: <T>(key: string, defaultValue?: T): T | null => {
        if (typeof window === "undefined") return defaultValue || null;
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item): defaultValue || null;
        } catch (error) {
            console.log("Error reading from localStorage", error);
            return defaultValue || null;
        }
    },
    set: <T>(key: string, value: T): void => {
        if (typeof window === "undefined") return;
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log("Error writing to localStorage", error);
        }
    },
    remove: (key: string): void => {
        if (typeof window === "undefined") return;
        try {
            window.localStorage.removeItem(key);
        } catch (error) {
            console.log("Error removing from localStorage", error);
        }
    },
    clear: (): void => {
        if (typeof window === "undefined") return;
        try {
            window.localStorage.clear();
        } catch (error) {
            console.log("Error clearing localStorage", error)
        }
    }
};
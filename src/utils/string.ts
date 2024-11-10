export const slugify = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
};

export const truncate = (
    text: string,
    lenght: number,
    suffix: "..."
): string => {
    if (text.length <= lenght) return text;
    return text.substring(0, lenght).trim() + suffix;

};

export const capitalize = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};
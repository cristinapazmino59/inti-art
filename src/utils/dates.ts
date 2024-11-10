export const addDays = (date: Date, days: number): Date => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

export const isDateInRage = (
    date: Date,
    startDate: Date,
    endDate: Date,
): boolean => {
    return date >= startDate && date <= endDate;
};

export const getDaysBetween = (start: Date, end: Date): number => {
    const difference = end.getTime() - start.getTime();
    return Math.ceil(difference / (1000*3600*24));
};
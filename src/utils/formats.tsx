export const formatCurrency = (amount: number, currency = "USD", locale = "en-US") => {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
    }).format(amount);
};

export const formatDate = (
    date: Date | string,
    options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric"
    }
) => {
    return new Intl.DateTimeFormat("en-US", options).format(new Date(date))
};
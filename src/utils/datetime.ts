export function formatDate(date: Date) {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    return formattedDate;
}

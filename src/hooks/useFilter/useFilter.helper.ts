export const objectToURLSearchParams = (obj: Record<string, unknown>) => {
    return new URLSearchParams(
        Object.entries(obj)
            .filter(([_, v]) => v !== undefined)
            .map(([k, v]) => [k, String(v)])
    );
};

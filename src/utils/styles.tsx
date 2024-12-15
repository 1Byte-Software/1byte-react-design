export const getExcludeForwardProps = <T extends any>(
    propsNotForward: (keyof T)[],
    prop: string
) => {
    return !propsNotForward.includes(prop as keyof T);
};

export const getIncludeForwardProps = <T extends any>(
    propsNotForward: (keyof T)[],
    prop: string
) => {
    return propsNotForward.includes(prop as keyof T);
};

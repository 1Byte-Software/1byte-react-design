import { css } from '@emotion/react';
import { TAxis } from '../models';

export const getAxisStyles = (axis?: TAxis) => {
    if (axis === 'vertical') {
        return css`
            display: flex;
            flex-direction: column;
        `;
    }
    return css`
        display: flex;
        flex-direction: row;
    `;
};

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

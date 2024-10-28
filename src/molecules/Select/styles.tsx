import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SelectWrapper = styled.div<{ width?: string | number; minWidth?: string | number }>`
    ${props => {
        return (
            props.width &&
            css`
                width: ${props.width};
            `
        );
    }}

    ${props => {
        return (
            props.minWidth &&
            css`
                min-width: ${props.minWidth};
            `
        );
    }}

    .ant-select {
        width: 100%;
    }
`;

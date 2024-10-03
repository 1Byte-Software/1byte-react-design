import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SpinWrapper = styled.div<{ isFull: boolean }>`
    ${({ isFull }) =>
        isFull &&
        css`
            width: 100%;
            height: 100%;

            .ant-spin-container,
            .ant-spin-nested-loading {
                width: 100%;
                height: 100%;
            }
        `}
`;

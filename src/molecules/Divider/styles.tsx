import styled from '@emotion/styled';
import { Divider } from 'antd';
import { getExcludeForwardProps } from '../../utils';
import { RdDividerProps } from './types';
import { css } from '@emotion/react';

export const DividerStyles = styled(Divider, {
    shouldForwardProp: prop =>
        getExcludeForwardProps<RdDividerProps>(['disableMargin'] as (keyof RdDividerProps)[], prop),
})<RdDividerProps>`
    ${({ disableMargin }) => {
        return disableMargin && css`
            margin: 0;
        `;
    }}
`;

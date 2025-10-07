import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { getAliasToken } from '../../../../utils';

export const FilterFooterWrapper = styled.div`
    ${() => css`
        padding: ${getAliasToken('Filter', 'paddingSM')}px ${getAliasToken('Filter', 'padding')}px;

        border: 1px solid ${getAliasToken('Filter', 'colorBorder')};
        border-radius: ${getAliasToken('Filter', 'borderRadius')}px;

        &:empty {
            display: none;
        }
    `}
`;

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Search } from '../../../../molecules/Input/Search';
import { getAliasToken } from '../../../../utils';

export const FilterHeaderWrapper = styled.div`
    ${() => css`
        padding: ${getAliasToken('Filter', 'paddingSM')}px ${getAliasToken('Filter', 'paddingLG')}px;
        border: 1px solid ${getAliasToken('Filter', 'colorBorder')};

        border-top-left-radius: ${getAliasToken('Filter', 'borderRadius')}px;
        border-top-right-radius: ${getAliasToken('Filter', 'borderRadius')}px;

        &:only-child {
            border-bottom-left-radius: ${getAliasToken('Filter', 'borderRadius')}px;
            border-bottom-right-radius: ${getAliasToken('Filter', 'borderRadius')}px;
        }
    `}
`;

export const InputFilterStyles = styled(Search)`
    max-width: 400px;
`;

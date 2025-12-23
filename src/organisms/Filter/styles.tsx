import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FormInternal } from '../../molecules';
import { getAliasToken } from '../../utils';
import { RdFilterProps } from './types';

export const filterWrapperFunc = () => styled(FormInternal as any)<{
    header: RdFilterProps<string>['headerProps'];
}>`
    ${() => css`
        background-color: ${getAliasToken('Filter', 'colorBgLayout')};
        border-radius: ${getAliasToken('Filter', 'borderRadius')}px;
    `}

    ${() => {
        // Remove top border radius from the 2nd element onward and prevent double borders between items.
        return css`
            .rd-filter-footer:not(:first-of-type) {
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                border-top: none;
            }
        `;
    }}
`;

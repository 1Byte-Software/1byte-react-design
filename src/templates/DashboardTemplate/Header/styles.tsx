import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Layout } from 'antd';
import { getAliasToken, getExcludeForwardProps } from '../../../utils';
import { RdDashboardTemplateHeaderProps } from './types';
import { Flex } from '../../../atomics';

export const DashboardTemplateHeaderStyles = styled(Layout.Header, {
    label: 'rd-dashboard-template-header',
    shouldForwardProp: prop =>
        getExcludeForwardProps<Omit<RdDashboardTemplateHeaderProps, 'render'>>(
            ['fixedOnScroll'] as (keyof Omit<RdDashboardTemplateHeaderProps, 'render'>)[],
            prop
        ),
})<Omit<RdDashboardTemplateHeaderProps, 'render'>>`
    display: flex;
    justify-content: space-between;

    ${({ fixedOnScroll }) => {
        const zIndexBase = getAliasToken('DashboardTemplate', 'zIndexBase') || 0;
        const zIndexHeader = zIndexBase;

        return (
            fixedOnScroll &&
            css`
                position: sticky;
                top: 0;
                z-index: ${zIndexHeader};
            `
        );
    }}
`;

export const DashboardTemplateHeaderContent = styled(Flex)``;

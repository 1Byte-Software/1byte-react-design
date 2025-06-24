import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Layout } from 'antd';
import { getComponentOrGlobalToken, getExcludeForwardProps } from '../../../utils';
import { RdDashboardTemplateHeaderProps } from './types';

export const DashboardTemplateHeaderStyles = styled(Layout.Header, {
    label: 'rd-dashboard-template-header',
    shouldForwardProp: prop =>
        getExcludeForwardProps<Omit<RdDashboardTemplateHeaderProps, 'render'>>(
            ['fixedOnScroll'] as (keyof Omit<RdDashboardTemplateHeaderProps, 'render'>)[],
            prop
        ),
})<Omit<RdDashboardTemplateHeaderProps, 'render'>>`
    ${({ fixedOnScroll }) => {
        return fixedOnScroll &&
            css`
                position: sticky;
                top: 0;
                z-index: ${getComponentOrGlobalToken('DashboardTemplate', 'zIndexBase') ?? 1050};
            `;
    }}
`;

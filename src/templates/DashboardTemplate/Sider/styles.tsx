import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Layout } from 'antd';
import { getComponentToken, getExcludeForwardProps } from '../../../utils';
import { RdDashboardTemplateSiderProps } from './types';

export const DashboardTemplateSiderStyles = styled(Layout.Sider, {
    label: 'rd-dashboard-template-header',
    shouldForwardProp: prop =>
        getExcludeForwardProps<Omit<RdDashboardTemplateSiderProps, 'render'>>(
            ['fixedOnScroll'] as (keyof Omit<RdDashboardTemplateSiderProps, 'render'>)[],
            prop
        ),
})<Omit<RdDashboardTemplateSiderProps, 'render'>>`
    ${() => css`
        overflow: auto;
        inset-inline-start: 0;
        height: 100%;
    `}

    ${({ fixedOnScroll }) =>
        fixedOnScroll &&
        css`
            height: calc(100vh - ${getComponentToken('Layout', 'headerHeight')}px);
            position: sticky;
            top: ${getComponentToken('Layout', 'headerHeight')}px;
            bottom: 0;
        `}
`;

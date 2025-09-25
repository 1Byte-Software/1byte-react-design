import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Layout } from 'antd';
import { getAliasToken, getComponentToken, getExcludeForwardProps } from '../../../utils';
import { getBorderInlineEndStyle, getColorBgHeaderSiderStyle } from '../helper';
import { RdDashboardTemplateSiderProps } from './types';

export const DashboardTemplateSiderStyles = styled(Layout.Sider, {
    label: 'rd-dashboard-template-sider',
    shouldForwardProp: prop =>
        getExcludeForwardProps<Omit<RdDashboardTemplateSiderProps, 'render'>>(
            ['fixedOnScroll'] as (keyof Omit<RdDashboardTemplateSiderProps, 'render'>)[],
            prop
        ),
})<Omit<RdDashboardTemplateSiderProps & { fixed: boolean }, 'render'>>`
    ${({ fixedOnScroll }) => {
        const zIndexBase = getAliasToken('DashboardTemplate', 'zIndexBase') || 0;
        const zIndexSider = zIndexBase + 1;

        return css`
            overflow: visible;
            inset-inline-start: 0;
            ${fixedOnScroll &&
            css`
                height: 100%;
            `}
            z-index: ${zIndexSider};
        `;
    }}

    ${({ fixedOnScroll, sidebarMode }) => {
        if (fixedOnScroll) {
            if (sidebarMode === 'fullHeight') {
                return css`
                    height: 100vh;
                    position: sticky;
                    top: 0;
                `;
            }

            return css`
                height: calc(100vh - ${getComponentToken('Layout', 'headerHeight')}px);
                position: sticky;
                top: ${getComponentToken('Layout', 'headerHeight')}px;
                bottom: 0;
            `;
        }
    }}

    ${({ fixed }) =>
        fixed &&
        css`
            position: fixed;
            height: 100vh;
            top: 0;
            left: 0;
            bottom: 0;
        `}

    ${() => {
        return css`
            .ant-layout-sider-children,
            .ant-layout-sider-trigger {
                border-inline-end: ${getBorderInlineEndStyle()};
            }
        `;
    }}
`;

export const DashboardTemplateHeaderSidebarStyled = styled('div', {
    label: 'rd-dashboard-template-header-sidebar',
})<{ fixedOnScroll?: boolean }>`
    position: relative;

    ${() => {
        const zIndexBase = getAliasToken('DashboardTemplate', 'zIndexBase') || 0;
        const zIndexHeaderSider = zIndexBase + 1;

        return css`
            height: ${getComponentToken('Layout', 'headerHeight')}px;
            background-color: ${getColorBgHeaderSiderStyle()};
            z-index: ${zIndexHeaderSider};
        `;
    }}

    ${({ fixedOnScroll }) =>
        fixedOnScroll &&
        css`
            position: sticky;
            top: 0;
        `}
`;

export const DashboardTemplateSiderContentStyled = styled.div`
    ${() => css``}
`;

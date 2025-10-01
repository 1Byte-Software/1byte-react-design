import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Layout } from 'antd';
import { getAliasToken, getComponentToken, getExcludeForwardProps } from '../../../utils';
import { getBorderInlineEndStyle, getColorBgHeaderSiderStyle } from '../helper';
import { RdDashboardTemplateSiderProps } from './types';

/**
 * Styled component for the DashboardTemplate Sider.
 *
 * - Supports 2 sidebar modes:
 *   1. fullHeight: Sidebar spans the entire viewport height (header + content).
 *   2. contentHeight: Sidebar only spans the area below the Header.
 *
 * - Works together with `fixedOnScroll` to determine sticky/fixed behavior while scrolling.
 * - Works together with `fixed` to enable overlay mode (sidebar floats above content, usually on mobile).
 */
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

            // When fixedOnScroll is enabled, the sider takes full height
            // and its children can scroll vertically if needed.
            ${fixedOnScroll &&
            css`
                height: 100%;

                .ant-layout-sider-children {
                    overflow-y: auto;
                }
            `}
            z-index: ${zIndexSider};
        `;
    }}

    ${({ fixedOnScroll, sidebarMode }) => {
        if (fixedOnScroll) {
            if (sidebarMode === 'fullHeight') {
                // Sidebar spans the full viewport height, including the header.
                // Using sticky top:0 makes sure it always stays pinned at the very top when scrolling.
                return css`
                    height: 100vh;
                    position: sticky;
                    top: 0;
                `;
            }

            // Sidebar spans only the space below the header.
            // Using sticky ensures that when the main content scrolls,
            // the sidebar stays pinned right below the header,
            // instead of scrolling away with the content.
            return css`
                height: calc(100vh - ${getComponentToken('Layout', 'headerHeight')}px);
                position: sticky;
                top: ${getComponentToken('Layout', 'headerHeight')}px;
                bottom: 0;
            `;
        }
    }}

    ${({ fixed }) => {
        // Overlay mode: sidebar is fixed on top of the content
        // (commonly used on mobile or when fully collapsed).
        return (
            fixed &&
            css`
                position: fixed;
                height: 100vh;
                top: 0;
                left: 0;
                bottom: 0;
            `
        );
    }}

    ${() => {
        // Add a border between the sider and the content/trigger.
        return css`
            .ant-layout-sider-children,
            .ant-layout-sider-trigger {
                border-inline-end: ${getBorderInlineEndStyle()};
            }
        `;
    }}
`;

/**
 * Header section inside the Sider.
 * Typically used for displaying logo, favicon, or a toggle button.
 */
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

    // If fixedOnScroll is enabled, the sider header also becomes sticky,
    // so it always stays visible at the top of the sidebar when scrolling.
    ${({ fixedOnScroll }) =>
        fixedOnScroll &&
        css`
            position: sticky;
            top: 0;
        `}
`;

/**
 * Content section inside the Sidebar.
 * Used for navigation menus or other sidebar content.
 */
export const DashboardTemplateSiderContentStyled = styled.div`
    ${() => css``}
`;

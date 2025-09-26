import { RdLayoutSiderRef, RdSiderProps } from '../../../molecules';

//#region Define extended types

/**
 * Defines how the Sidebar should be displayed inside the DashboardTemplate.
 *
 * - `"fullHeight"`: Sidebar takes up the entire page height (including both header and content).
 *   Useful when the sidebar should be fixed and stretch from top to bottom.
 *
 * - `"contentHeight"`: Sidebar height is limited to the content area (positioned below the header).
 *   Useful when the sidebar should be visually separated from the header.
 */
type SidebarMode = 'fullHeight' | 'contentHeight';

export type DashboardTemplateSiderPropsExtend = {
    /**
     * Whether the sidebar should remain fixed when scrolling the page.
     *
     * @default true
     */
    fixedOnScroll?: boolean;

    /**
     * Whether the header inside the sidebar should remain fixed when scrolling the sidebar content.
     *
     * @default true
     */
    fixedHeaderOnScroll?: boolean;

    /**
     * Custom render function for the sidebar content.
     *
     * @param props - All props of `RdDashboardTemplateSiderProps` except `render`.
     * @returns A React node that will be rendered inside the sidebar.
     */
    render?: (props: Omit<RdDashboardTemplateSiderProps, 'render'>) => React.ReactNode;

    /**
     * Custom render function for the sidebar header section.
     *
     * @param collapsed - Indicates whether the sidebar is currently collapsed.
     * @returns A React node that will be rendered as the sidebar header.
     */
    headerSidebar?: (collapsed: boolean) => React.ReactNode;

    /**
     * Determines how the sidebar should be positioned relative to the header and content.
     *
     * @see SidebarMode
     */
    sidebarMode?: SidebarMode;
};
//#endregion

export type RdDashboardTemplateSiderProps = RdSiderProps & DashboardTemplateSiderPropsExtend;
export type RdDashboardTemplateSiderRef = RdLayoutSiderRef & {};

export type RdDashboardTemplateSiderComponent = React.ForwardRefExoticComponent<
    RdDashboardTemplateSiderProps &
        RdDashboardTemplateSiderRef & {
            toggleSider: () => void;
        }
>;

import { RdLayoutSiderRef, RdSiderProps } from '../../../molecules';

//#region Define extended types
type SidebarMode = 'fullHeight' | 'contentHeight';

export type DashboardTemplateSiderPropsExtend = {
    fixedOnScroll?: boolean;
    fixedHeaderOnScroll?: boolean;

    render?: (props: Omit<RdDashboardTemplateSiderProps, 'render'>) => React.ReactNode;

    headerSidebar?: (collapsed: boolean) => React.ReactNode;
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

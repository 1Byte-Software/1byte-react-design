import { RdLayoutSiderRef, RdSiderProps } from "../../../molecules";

//#region Define extended types
export type DashboardTemplateSiderPropsExtend = {
    fixedOnScroll?: boolean;

    render?: (props: Omit<RdDashboardTemplateSiderProps, 'render'>) => React.ReactNode;
};
//#endregion

export type RdDashboardTemplateSiderProps = RdSiderProps & DashboardTemplateSiderPropsExtend;
export type RdDashboardTemplateSiderRef = RdLayoutSiderRef & {};

export type RdDashboardTemplateSiderComponent = React.ForwardRefExoticComponent<
    RdDashboardTemplateSiderProps & RdDashboardTemplateSiderRef
>;

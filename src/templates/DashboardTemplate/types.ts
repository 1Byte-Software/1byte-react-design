import { RdLayoutProps, RdLayoutRef } from '../../molecules';
import { RdDashboardTemplateFooterComponent, RdDashboardTemplateFooterProps } from './Footer/types';
import { RdDashboardTemplateHeaderComponent, RdDashboardTemplateHeaderProps } from './Header/types';
import { RdDashboardTemplateSiderComponent, RdDashboardTemplateSiderProps } from './Sider/types';

//#region Define extended component tokens
type DashboardTemplateComponentTokenExtend = {
    contentPadding?: string;
    siderWidth?: number;
};

//#endregion

//#region Define extended types
type DashboardTemplatePropsExtend = {
    headerProps?: RdDashboardTemplateHeaderProps | false;
    siderProps?: RdDashboardTemplateSiderProps | false;
    footerProps?: RdDashboardTemplateFooterProps | false;
    fitScreen?: boolean;
};

type DashboardTemplateRefExtend = {};

//#endregion

//#region Export types
export type RdDashboardTemplateProps = RdLayoutProps & DashboardTemplatePropsExtend;
export type RdDashboardTemplateRef = RdLayoutRef & DashboardTemplateRefExtend;

export type RdDashboardTemplateComponentToken = DashboardTemplateComponentTokenExtend;
//#endregion

//#region Define component types
export type RdDashboardTemplateComponent = React.ForwardRefExoticComponent<
    RdDashboardTemplateProps & RdDashboardTemplateRef
>;

export type RdDashboardTemplateCompoundedComponent = RdDashboardTemplateComponent & {
    Header: RdDashboardTemplateHeaderComponent;
    Sider: RdDashboardTemplateSiderComponent;
    Footer: RdDashboardTemplateFooterComponent;
    // Content: RdLayoutContentComponent;
    // Sider: RdLayoutSiderComponent;
};

//#endregion

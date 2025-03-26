import { RdLayoutProps, RdLayoutRef } from '../../molecules';
import { RdDashboardTemplateHeaderComponent, RdDashboardTemplateHeaderProps } from './Header/types';
import { RdDashboardTemplateSiderComponent, RdDashboardTemplateSiderProps } from './Sider/types';

//#region Define extended component tokens
type DashboardTemplateComponentTokenExtend = {};

//#endregion

//#region Define extended types
type DashboardTemplatePropsExtend = {
    headerProps?: RdDashboardTemplateHeaderProps;
    siderProps?: RdDashboardTemplateSiderProps;
    test?: boolean;
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
    // Content: RdLayoutContentComponent;
    // Sider: RdLayoutSiderComponent;
};

//#endregion

import { RdFooterProps, RdLayoutFooterRef } from '../../../molecules';

//#region Define extended types
export type DashboardTemplateFooterPropsExtend = {
    fixedOnScroll?: boolean;

    render?: (props: Omit<RdDashboardTemplateFooterProps, 'render'>) => React.ReactNode;
};
//#endregion

export type RdDashboardTemplateFooterProps = RdFooterProps & DashboardTemplateFooterPropsExtend;
export type RdDashboardTemplateFooterRef = RdLayoutFooterRef & {};

export type RdDashboardTemplateFooterComponent = React.ForwardRefExoticComponent<
    RdDashboardTemplateFooterProps & RdDashboardTemplateFooterRef
>;

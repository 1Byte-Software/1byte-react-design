import { RdHeaderProps, RdLayoutHeaderRef } from '../../../molecules';

//#region Define extended types
export type DashboardTemplateHeaderPropsExtend = {
    fixedOnScroll?: boolean;

    render?: (props: Omit<RdDashboardTemplateHeaderProps, 'render'>) => React.ReactNode;
};
//#endregion

export type RdDashboardTemplateHeaderProps = RdHeaderProps & DashboardTemplateHeaderPropsExtend;
export type RdDashboardTemplateHeaderRef = RdLayoutHeaderRef & {};

export type RdDashboardTemplateHeaderComponent = React.ForwardRefExoticComponent<
    RdDashboardTemplateHeaderProps &
        RdDashboardTemplateHeaderRef & {
            collapsed: boolean;
            toggleSider: () => void;
        }
>;

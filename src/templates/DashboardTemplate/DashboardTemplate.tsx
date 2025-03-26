import { forwardRef } from 'react';
import DashboardTemplateHeader from './Header';
import DashboardTemplateSider from './Sider';
import { DashboardTemplateStyles } from './styles';
import { RdDashboardTemplateComponent, RdDashboardTemplateCompoundedComponent } from './types';
import { Layout } from '../../molecules';

const DashboardTemplateInternal: RdDashboardTemplateComponent = forwardRef((props, ref) => {
    const { headerProps: headerProps, siderProps: siderProps, ...restProps } = props;

    return (
        <DashboardTemplateStyles ref={ref} {...restProps}>
            <DashboardTemplateHeader {...headerProps} />

            <Layout hasSider>
                <DashboardTemplateSider {...siderProps} />

                <Layout>{props.children}</Layout>
            </Layout>
        </DashboardTemplateStyles>
    );
});

export const DashboardTemplate =
    DashboardTemplateInternal as RdDashboardTemplateCompoundedComponent;
DashboardTemplate.Header = DashboardTemplateHeader;
DashboardTemplate.Sider = DashboardTemplateSider;

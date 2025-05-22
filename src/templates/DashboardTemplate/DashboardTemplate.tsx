import { forwardRef } from 'react';
import { Layout } from '../../molecules';
import DashboardTemplateFooter from './Footer';
import DashboardTemplateHeader from './Header';
import DashboardTemplateSider from './Sider';
import { DashboardTemplateContent, DashboardTemplateStyles } from './styles';
import { RdDashboardTemplateComponent, RdDashboardTemplateCompoundedComponent } from './types';

const DashboardTemplateInternal: RdDashboardTemplateComponent = forwardRef((props, ref) => {
    const { headerProps, siderProps, footerProps, ...restProps } = props;

    return (
        <DashboardTemplateStyles ref={ref} {...restProps}>
            <DashboardTemplateHeader {...headerProps} />

            <Layout hasSider>
                <DashboardTemplateSider {...siderProps} />

                <Layout>
                    <DashboardTemplateContent>{props.children}</DashboardTemplateContent>
                    {footerProps !== false && (
                        <DashboardTemplateFooter {...footerProps}></DashboardTemplateFooter>
                    )}
                </Layout>
            </Layout>
        </DashboardTemplateStyles>
    );
});

export const DashboardTemplate =
    DashboardTemplateInternal as RdDashboardTemplateCompoundedComponent;
DashboardTemplate.Header = DashboardTemplateHeader;
DashboardTemplate.Sider = DashboardTemplateSider;
DashboardTemplate.Footer = DashboardTemplateFooter;

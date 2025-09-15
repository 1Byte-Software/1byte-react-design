import { forwardRef } from 'react';
import { Layout } from '../../molecules';
import DashboardTemplateFooter from './Footer';
import DashboardTemplateHeader from './Header';
import DashboardTemplateSider from './Sider';
import {
    DashboardTemplateContent,
    DashboardTemplateSkeletonLayout,
    DashboardTemplateStyles,
} from './styles';
import { RdDashboardTemplateComponent, RdDashboardTemplateCompoundedComponent } from './types';

const DashboardTemplateInternal: RdDashboardTemplateComponent = forwardRef((props, ref) => {
    const {
        headerProps = null,
        siderProps = null,
        footerProps = null,
        fitScreen = false,
        ...restProps
    } = props;

    return (
        <DashboardTemplateStyles ref={ref} fitScreen={fitScreen} {...restProps}>
            {headerProps && <DashboardTemplateHeader {...headerProps} />}

            <Layout hasSider={Boolean(siderProps)}>
                {siderProps && <DashboardTemplateSider {...siderProps} />}

                <DashboardTemplateSkeletonLayout>
                    <DashboardTemplateContent fitScreen={fitScreen}>
                        {props.children}
                    </DashboardTemplateContent>
                    {footerProps && (
                        <DashboardTemplateFooter {...footerProps}></DashboardTemplateFooter>
                    )}
                </DashboardTemplateSkeletonLayout>
            </Layout>
        </DashboardTemplateStyles>
    );
});

export const DashboardTemplate =
    DashboardTemplateInternal as RdDashboardTemplateCompoundedComponent;
DashboardTemplate.Header = DashboardTemplateHeader;
DashboardTemplate.Sider = DashboardTemplateSider;
DashboardTemplate.Footer = DashboardTemplateFooter;

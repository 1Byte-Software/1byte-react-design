import { GetProps, Layout } from 'antd';
import { ComponentToken as LayoutComponentTokenAntd } from 'antd/es/layout/style';

//#region Define Ant Design types
type LayoutProps = GetProps<typeof Layout>;
type ContentProps = GetProps<typeof Layout.Content>;
type FooterProps = GetProps<typeof Layout.Footer>;
type HeaderProps = GetProps<typeof Layout.Header>;
type SiderProps = GetProps<typeof Layout.Sider>;
//#endregion

//#region Define extended component tokens
type LayoutComponentTokenExtend = {};
//#endregion

//#region Define extended types
type LayoutPropsExtend = {};
type ContentPropsExtend = {};
type FooterPropsExtend = {};
type HeaderPropsExtend = {};
type SiderPropsExtend = {};
//#endregion

//#region Export types
export type RdLayoutProps = LayoutProps & LayoutPropsExtend;
export type RdContentProps = ContentProps & ContentPropsExtend;
export type RdFooterProps = FooterProps & FooterPropsExtend;
export type RdHeaderProps = HeaderProps & HeaderPropsExtend;
export type RdSiderProps = SiderProps & SiderPropsExtend;

export type RdLayoutComponentToken = LayoutComponentTokenAntd & LayoutComponentTokenExtend;
//#endregion

//#region Define component types
export type RdLayoutComponent = React.ForwardRefExoticComponent<
    RdLayoutProps & React.RefAttributes<HTMLElement>
>;

export type RdLayoutHeaderComponent = React.ForwardRefExoticComponent<
    RdHeaderProps & React.RefAttributes<HTMLElement>
>;
export type RdLayoutFooterComponent = React.ForwardRefExoticComponent<
    RdFooterProps & React.RefAttributes<HTMLElement>
>;
export type RdLayoutContentComponent = React.ForwardRefExoticComponent<
    RdContentProps & React.RefAttributes<HTMLElement>
>;
export type RdLayoutSiderComponent = React.ForwardRefExoticComponent<
    RdSiderProps & React.RefAttributes<HTMLDivElement>
>;

export type RdLayoutCompoundedComponent = RdLayoutComponent & {
    Header: RdLayoutComponent;
    Footer: RdLayoutFooterComponent;
    Content: RdLayoutContentComponent;
    Sider: RdLayoutSiderComponent;
};
//#endregion

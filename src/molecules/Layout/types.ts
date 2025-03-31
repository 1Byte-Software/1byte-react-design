import { SiderProps as SiderPropsAntd } from 'antd';
import { BasicProps as BasicPropsAntd } from 'antd/es/layout/layout';
import { ComponentToken as LayoutComponentTokenAntd } from 'antd/es/layout/style';

//#region Define Ant Design types
type LayoutProps = BasicPropsAntd;
type ContentProps = BasicPropsAntd;
type FooterProps = BasicPropsAntd;
type HeaderProps = BasicPropsAntd;
type SiderProps = SiderPropsAntd;

type LayoutBaseRefAntd = React.RefAttributes<HTMLElement>;
type LayoutSiderRefAntd = React.RefAttributes<HTMLDivElement>;
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

type LayoutRefExtend = {};
type LayoutHeaderRefExtend = {};
type LayoutFooterRefExtend = {};
type LayoutContentRefExtend = {};
type LayoutSiderRefExtend = {};

//#endregion

//#region Export types
export type RdLayoutProps = LayoutProps & LayoutPropsExtend;
export type RdContentProps = ContentProps & ContentPropsExtend;
export type RdFooterProps = FooterProps & FooterPropsExtend;
export type RdHeaderProps = HeaderProps & HeaderPropsExtend;
export type RdSiderProps = SiderProps & SiderPropsExtend;

export type RdLayoutRef = LayoutBaseRefAntd & LayoutRefExtend;
export type RdLayoutHeaderRef = LayoutBaseRefAntd & LayoutHeaderRefExtend;
export type RdLayoutFooterRef = LayoutBaseRefAntd & LayoutFooterRefExtend;
export type RdLayoutContentRef = LayoutBaseRefAntd & LayoutContentRefExtend;
export type RdLayoutSiderRef = LayoutSiderRefAntd & LayoutSiderRefExtend;

export type RdLayoutComponentToken = LayoutComponentTokenAntd & LayoutComponentTokenExtend;
//#endregion

//#region Define component types
export type RdLayoutComponent = React.ForwardRefExoticComponent<RdLayoutProps & RdLayoutRef>;

export type RdLayoutHeaderComponent = React.ForwardRefExoticComponent<
    RdHeaderProps & RdLayoutHeaderRef
>;
export type RdLayoutFooterComponent = React.ForwardRefExoticComponent<
    RdFooterProps & RdLayoutFooterRef
>;
export type RdLayoutContentComponent = React.ForwardRefExoticComponent<
    RdContentProps & RdLayoutContentRef
>;
export type RdLayoutSiderComponent = React.ForwardRefExoticComponent<
    RdSiderProps & RdLayoutSiderRef
>;

export type RdLayoutCompoundedComponent = RdLayoutComponent & {
    Header: RdLayoutComponent;
    Footer: RdLayoutFooterComponent;
    Content: RdLayoutContentComponent;
    Sider: RdLayoutSiderComponent;
};
//#endregion

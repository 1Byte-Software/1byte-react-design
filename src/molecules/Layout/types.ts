import { Layout, GetProps } from 'antd';
import { ComponentToken as LayoutComponentTokenAntd } from 'antd/es/layout/style';

//#region Define props
type LayoutProps = GetProps<typeof Layout>;
type ContentProps = GetProps<typeof Layout.Content>;
type FooterProps = GetProps<typeof Layout.Footer>;
type HeaderProps = GetProps<typeof Layout.Header>;
type SiderProps = GetProps<typeof Layout.Sider>;
//#endregion

//#region Custom component token
type LayoutComponentTokenExtend = {};
//#endregion

//#region Custom props
type LayoutPropsExtend = {};
type ContentPropsExtend = {};
type FooterPropsExtend = {};
type HeaderPropsExtend = {};
type SiderPropsExtend = {};
//#endregion

//#region export type
export type RdLayoutProps = LayoutProps & LayoutPropsExtend;
export type RdContentProps = ContentProps & ContentPropsExtend;
export type RdFooterProps = FooterProps & FooterPropsExtend;
export type RdHeaderProps = HeaderProps & HeaderPropsExtend;
export type RdSiderProps = SiderProps & SiderPropsExtend;

export type RdLayoutComponentToken = LayoutComponentTokenAntd & LayoutComponentTokenExtend;
//#endregion

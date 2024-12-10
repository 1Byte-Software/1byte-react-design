import { LayoutProps, SiderProps } from 'antd';
import { ComponentToken } from 'antd/es/layout/style';

/**
 * @description Override LayoutComponentToken of antd.
 */
export type LayoutComponentToken = ComponentToken & {};

export interface RdLayoutProps extends LayoutProps {}
export interface RdSiderProps extends SiderProps {}

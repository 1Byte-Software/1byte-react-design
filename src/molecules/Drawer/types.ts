import { DrawerProps } from 'antd';
import { ComponentToken } from 'antd/es/drawer/style';

/**
 * @description Override DrawerComponentToken of antd.
 */
export type DrawerComponentToken = ComponentToken & {};

export interface RdDrawerProps extends DrawerProps {}

import { MenuProps } from 'antd';
import { ComponentToken } from 'antd/es/menu/style';

/**
 * @description Override MenuComponentToken of antd.
 */
export type MenuComponentToken = ComponentToken & {};

export interface RdMenuProps extends MenuProps {}

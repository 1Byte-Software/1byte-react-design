import { DropdownProps, Dropdown } from 'antd';
import { DropdownButtonProps } from 'antd/es/dropdown';
import { ComponentToken } from 'antd/es/dropdown/style';

/**
 * @description Override DropdownComponentToken of antd.
 */
export type DropdownComponentToken = ComponentToken & {};

export interface RdDropdownProps extends DropdownProps {}

export interface RdDropdownButtonProps extends DropdownButtonProps {}

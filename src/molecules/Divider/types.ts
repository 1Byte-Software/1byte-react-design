import { DividerProps } from 'antd';
import { ComponentToken } from 'antd/es/divider/style';

/**
 * @description Override DividerComponentToken of antd.
 */
export type DividerComponentToken = ComponentToken & {};

export interface RdDividerProps extends DividerProps {}

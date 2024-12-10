import { CollapseProps } from 'antd';
import { ComponentToken } from 'antd/es/collapse/style';

/**
 * @description Override CollapseComponentToken of antd.
 */
export type CollapseComponentToken = ComponentToken & {};

export interface RdCollapseProps extends CollapseProps {}

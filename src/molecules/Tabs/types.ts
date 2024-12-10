import { TabsProps } from 'antd';
import { ComponentToken } from 'antd/es/tabs/style';

/**
 * @description Override TabsComponentToken of antd.
 */
export type TabsComponentToken = ComponentToken & {};

export interface RdTabsProps extends TabsProps {}

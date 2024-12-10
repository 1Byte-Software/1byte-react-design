import { PopoverProps } from 'antd';
import { ComponentToken } from 'antd/es/popover/style';

/**
 * @description Override PopoverComponentToken of antd.
 */
export type PopoverComponentToken = ComponentToken & {};

export interface RdPopoverProps extends PopoverProps {}

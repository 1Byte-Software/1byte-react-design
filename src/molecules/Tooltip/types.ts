import { GetProps, Tooltip } from 'antd';
import { ComponentToken } from 'antd/es/tooltip/style';

/**
 * @description Override TooltipComponentToken of antd.
 */
export type TooltipComponentToken = ComponentToken & {};

type TooltipProps = GetProps<typeof Tooltip>;

type TooltipPropsExtend = {};

export type RdTooltipProps = TooltipProps & TooltipPropsExtend;

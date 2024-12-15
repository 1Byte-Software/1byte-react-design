import { Tooltip, GetProps } from 'antd';
import { ComponentToken as TooltipComponentTokenAntd } from 'antd/es/tooltip/style';

//#region Define props
type TooltipProps = GetProps<typeof Tooltip>;
//#endregion

//#region Custom component token
type TooltipComponentTokenExtend = {};
//#endregion

//#region Custom props
type TooltipPropsExtend = {};
//#endregion

//#region export type
export type RdTooltipProps = TooltipProps & TooltipPropsExtend;
export type RdTooltipComponentToken = TooltipComponentTokenAntd & TooltipComponentTokenExtend;
//#endregion

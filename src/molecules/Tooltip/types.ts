import { Tooltip, GetProps } from 'antd';
import { ComponentToken as TooltipComponentTokenAntd } from 'antd/es/tooltip/style';

//#region Define Ant Design types
type TooltipProps = GetProps<typeof Tooltip>;
//#endregion

//#region Define extended component tokens
type TooltipComponentTokenExtend = {};
//#endregion

//#region Define extended types
type TooltipPropsExtend = {};
//#endregion

//#region Export types
export type RdTooltipProps = TooltipProps & TooltipPropsExtend;
export type RdTooltipComponentToken = TooltipComponentTokenAntd & TooltipComponentTokenExtend;
//#endregion

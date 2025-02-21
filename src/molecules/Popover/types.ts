import { Popover, GetProps } from 'antd';
import { ComponentToken as PopoverComponentTokenAntd } from 'antd/es/popover/style';
import { TooltipRef } from 'antd/es/tooltip';

//#region Define Ant Design types
type PopoverPropsAntd = GetProps<typeof Popover>;

type TooltipRefAntd = TooltipRef;
//#endregion

//#region Define extended component tokens
type PopoverComponentTokenExtend = {};
//#endregion

//#region Define extended types
type PopoverPropsExtend = {};
//#endregion

//#region Export types
export type RdPopoverProps = PopoverPropsAntd & PopoverPropsExtend;
export type RdPopoverComponentToken = PopoverComponentTokenAntd & PopoverComponentTokenExtend;
//#endregion

//#region Define component types
export type RdPopoverComponent = React.ForwardRefExoticComponent<
    PopoverPropsAntd & React.RefAttributes<TooltipRefAntd>
>;

//#endregion

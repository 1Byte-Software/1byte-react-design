import { Popover, GetProps } from 'antd';
import { ComponentToken as PopoverComponentTokenAntd } from 'antd/es/popover/style';

//#region Define props
type PopoverProps = GetProps<typeof Popover>;
//#endregion

//#region Custom component token
type PopoverComponentTokenExtend = {};
//#endregion

//#region Custom props
type PopoverPropsExtend = {};
//#endregion

//#region export type
export type RdPopoverProps = PopoverProps & PopoverPropsExtend;
export type RdPopoverComponentToken = PopoverComponentTokenAntd & PopoverComponentTokenExtend;
//#endregion

import { Popover, GetProps } from 'antd';
import { ComponentToken as PopoverComponentTokenAntd } from 'antd/es/popover/style';

//#region Define Ant Design types
type PopoverProps = GetProps<typeof Popover>;
//#endregion

//#region Define extended component tokens
type PopoverComponentTokenExtend = {};
//#endregion

//#region Define extended types
type PopoverPropsExtend = {};
//#endregion

//#region Export types
export type RdPopoverProps = PopoverProps & PopoverPropsExtend;
export type RdPopoverComponentToken = PopoverComponentTokenAntd & PopoverComponentTokenExtend;
//#endregion

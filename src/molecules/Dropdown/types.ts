import { Dropdown, GetProps } from 'antd';
import { ComponentToken as DropdownComponentTokenAntd } from 'antd/es/dropdown/style';

//#region Define props
type DropdownProps = GetProps<typeof Dropdown>;
type DropdownButtonProps = GetProps<typeof Dropdown.Button>;
//#endregion

//#region Custom component token
type DropdownComponentTokenExtend = {};
//#endregion

//#region Custom props
type DropdownPropsExtend = {};
type DropdownButtonPropsExtend = {};
//#endregion

//#region export type
export type RdDropdownProps = DropdownProps & DropdownPropsExtend;
export type RdDropdownButtonProps = DropdownButtonProps & DropdownButtonPropsExtend;

export type RdDropdownComponentToken = DropdownComponentTokenAntd & DropdownComponentTokenExtend;
//#endregion

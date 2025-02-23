import { Dropdown, GetProps } from 'antd';
import { ComponentToken as DropdownComponentTokenAntd } from 'antd/es/dropdown/style';

//#region Define Ant Design types
type DropdownPropsAntd = GetProps<typeof Dropdown>;
type DropdownButtonPropsAntd = GetProps<typeof Dropdown.Button>;
//#endregion

//#region Define extended component tokens
type DropdownComponentTokenExtend = {};
//#endregion

//#region Define extended types
type DropdownPropsExtend = {};
type DropdownButtonPropsExtend = {};
//#endregion

//#region Export types
export type RdDropdownProps = DropdownPropsAntd & DropdownPropsExtend;
export type RdDropdownButtonProps = DropdownButtonPropsAntd & DropdownButtonPropsExtend;

export type RdDropdownComponentToken = DropdownComponentTokenAntd & DropdownComponentTokenExtend;
//#endregion

//#region Define component types
export type RdDropdownComponent = React.FC<RdDropdownProps>;
export type RdDropdownButtonComponent = React.FC<RdDropdownButtonProps>;

export type RdDropdownCompoundedComponent = RdDropdownComponent & {
    Button: RdDropdownButtonComponent;
};
//#endregion

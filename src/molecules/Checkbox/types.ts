import { Checkbox, GetProps } from 'antd';
import { ComponentToken } from 'antd/es/checkbox/style';

//#region Define props
type CheckboxProps = GetProps<typeof Checkbox>;
type CheckboxGroupProps = GetProps<typeof Checkbox.Group>;
//#endregion

//#region Custom component token
type CheckboxComponentTokenExtend = {};
type CheckboxGroupComponentTokenExtend = {};
//#endregion

//#region Custom props
type CheckboxPropsExtend = {};
//#endregion

//#region export type
export type RdCheckboxProps = CheckboxProps & CheckboxPropsExtend;
export type RdCheckboxGroupProps = CheckboxGroupProps & CheckboxGroupComponentTokenExtend;

export type CheckboxComponentToken = ComponentToken & CheckboxComponentTokenExtend;
//#endregion

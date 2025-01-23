import { Checkbox, CheckboxRef, GetProps } from 'antd';
import { ComponentToken } from 'antd/es/checkbox/style';
import { CheckboxInternal } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

//#region Define Ant Design types
type CheckboxPropsAntd = GetProps<typeof Checkbox>;
type CheckboxGroupPropsAntd<T> = GetProps<typeof Checkbox.Group<T>>;
type CheckboxRefAntd = CheckboxRef;
//#endregion

//#region Define extended component tokens
type CheckboxComponentTokenExtend = {};
//#endregion

//#region Define extended types
export type CheckboxPropsExtend = {};
export type CheckboxGroupPropsExtend = {};
export type RdCheckboxRefExtend = {};
//#endregion

//#region Export types
export type RdCheckboxProps = CheckboxPropsAntd & CheckboxPropsExtend;
export type RdCheckboxGroupProps<T> = CheckboxGroupPropsAntd<T> & CheckboxGroupPropsExtend;
export type RdCheckboxRef = CheckboxRefAntd & RdCheckboxRefExtend;

export type CheckboxComponentToken = ComponentToken & CheckboxComponentTokenExtend;
//#endregion

//#region Define component types
export type RdCheckboxInternalComponent = React.ForwardRefExoticComponent<
    RdCheckboxProps & React.RefAttributes<RdCheckboxRef>
>;

export type RdCheckboxCompoundedComponent = typeof CheckboxInternal & {
    Group: typeof CheckboxGroup;
};
//#endregion

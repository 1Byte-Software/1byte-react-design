import { CheckboxProps } from 'antd';
import { IRegistryControlField } from '../../models';
import { ILabelFieldWrapperProps } from '../LabelField/types';
export interface ICheckboxProps extends CheckboxProps, ILabelFieldWrapperProps {
}
export interface ICheckboxControlProps extends Omit<ICheckboxProps, 'name'>, IRegistryControlField {
}

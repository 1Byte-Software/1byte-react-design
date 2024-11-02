import { CheckboxProps } from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import { IRegistryControlField, TAxis } from '../../models';
import { ILabelFieldWrapperProps } from '../LabelField/types';

interface ICheckboxBaseProps {}

export interface ICheckboxProps
    extends CheckboxProps,
        ICheckboxBaseProps,
        ILabelFieldWrapperProps {}
export interface ICheckboxControlProps
    extends Omit<ICheckboxProps, 'name'>,
        IRegistryControlField {}

export interface ICheckboxGroupProps
    extends CheckboxGroupProps,
        ICheckboxBaseProps,
        ILabelFieldWrapperProps {
    /**
     * @description The axis of options in CheckboxGroup.
     * @default 'horizontal'
     */
    axis?: TAxis;
}
export interface ICheckboxGroupControlProps
    extends Omit<ICheckboxGroupProps, 'name'>,
        IRegistryControlField {}

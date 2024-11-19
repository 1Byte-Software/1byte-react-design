import { CheckboxProps } from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import { RdRegistryControlField, TAxis } from '../../models';
import { RdLabelFieldWrapperProps } from '../LabelField/types';

interface ICheckboxBaseProps {}

export interface RdCheckboxProps
    extends CheckboxProps,
        ICheckboxBaseProps,
        RdLabelFieldWrapperProps {}
export interface RdCheckboxControlProps
    extends Omit<RdCheckboxProps, 'name'>,
        RdRegistryControlField {}

export interface ICheckboxGroupProps
    extends CheckboxGroupProps,
        ICheckboxBaseProps,
        RdLabelFieldWrapperProps {
    /**
     * @description The axis of options in CheckboxGroup.
     * @default 'horizontal'
     */
    axis?: TAxis;
}
export interface ICheckboxGroupControlProps
    extends Omit<ICheckboxGroupProps, 'name'>,
        RdRegistryControlField {}

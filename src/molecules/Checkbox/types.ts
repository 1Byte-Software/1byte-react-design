import { CheckboxProps } from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import { RdRegistryControlField, TAxis } from '../../models';
import { RdLabelFieldWrapperProps } from '../LabelField/types';

type RdCheckboxBaseProps = {};

export type RdCheckboxProps = CheckboxProps & RdCheckboxBaseProps & RdLabelFieldWrapperProps & {};

export type RdCheckboxControlProps = Omit<RdCheckboxProps, 'name'> & RdRegistryControlField & {};

export type RdCheckboxGroupProps = CheckboxGroupProps &
    RdCheckboxBaseProps &
    RdLabelFieldWrapperProps & {
        /**
         * @description The axis of options in CheckboxGroup.
         * @default 'horizontal'
         */
        axis?: TAxis;
    };
export interface RdCheckboxGroupControlProps
    extends Omit<RdCheckboxGroupProps, 'name'>,
        RdRegistryControlField {}

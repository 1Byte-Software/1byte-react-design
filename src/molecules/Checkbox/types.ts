import { Checkbox, GetProps } from 'antd';
import { RdRegistryControlField, TAxis } from '../../models';
import { RdLabelFieldWrapperProps } from '../LabelField/types';
import { ComponentToken } from 'antd/es/checkbox/style';

type CheckboxProps = GetProps<typeof Checkbox>;
type CheckboxGroupProps = GetProps<typeof Checkbox.Group>;

/**
 * @description Override CheckboxComponentToken of antd.
 */
export type CheckboxComponentToken = ComponentToken & {};

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

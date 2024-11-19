import { RadioGroupProps, RadioProps } from 'antd';
import { RdRegistryControlField, TAxis } from '../../models';
import { RdLabelFieldWrapperProps } from '../LabelField/types';
import { RadioButtonProps } from 'antd/es/radio/radioButton';

//#region Radio
export interface RdRadioProps extends RadioProps, RdLabelFieldWrapperProps {}

export interface RdRadioControlProps extends Omit<RdRadioProps, 'name'>, RdRegistryControlField {}
//#endregion Radio

//#region RadioButton
export interface RdRadioButtonProps extends RadioButtonProps, RdLabelFieldWrapperProps {}

export interface RdRadioButtonControlProps
    extends Omit<RdRadioButtonProps, 'name'>,
        RdRegistryControlField {}
//#endregion RadioButton

//#region RadioGroup
export interface RdRadioGroupProps extends RadioGroupProps, RdLabelFieldWrapperProps {
    /**
     * @description The axis of the radio options.
     * @default 'horizontal'
     */
    axis?: TAxis;
}

export interface RdRadioGroupControlProps
    extends Omit<RdRadioGroupProps, 'name'>,
        RdRegistryControlField {}
//#endregion RadioGroup

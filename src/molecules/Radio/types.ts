import { RadioGroupProps, RadioProps } from 'antd';
import { IRegistryControlField, TAxis } from '../../models';
import { ILabelFieldWrapperProps } from '../LabelField/types';
import { RadioButtonProps } from 'antd/es/radio/radioButton';

//#region Radio
export interface IRadioProps extends RadioProps, ILabelFieldWrapperProps {}

export interface IRadioControlProps extends Omit<IRadioProps, 'name'>, IRegistryControlField {}
//#endregion Radio

//#region RadioButton
export interface IRadioButtonProps extends RadioButtonProps, ILabelFieldWrapperProps {}

export interface IRadioButtonControlProps
    extends Omit<IRadioButtonProps, 'name'>,
        IRegistryControlField {}
//#endregion RadioButton

//#region RadioGroup
export interface IRadioGroupProps extends RadioGroupProps, ILabelFieldWrapperProps {
    /**
     * @description The axis of the radio options.
     * @default 'horizontal'
     */
    axis?: TAxis;
}

export interface IRadioGroupControlProps
    extends Omit<IRadioGroupProps, 'name'>,
        IRegistryControlField {}
//#endregion RadioGroup

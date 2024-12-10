import { GetProps, Input } from 'antd';
import { ComponentToken } from 'antd/es/input/style';
import { RdRegistryControlField } from '../../models';
import { RdLabelFieldWrapperProps } from '../LabelField/types';
import { InputInternal } from './Input';
import { InputControlInternal } from './InputControl';
import { InputPassword } from './InputPassword';
import { InputPasswordControl } from './InputPasswordControl';
import { InputTextArea } from './InputTextArea';
import { InputTextareaControl } from './InputTextAreaControl';

/**
 * @description Override InputComponentToken of antd.
 */
export type InputComponentToken = ComponentToken & {};

type InputProps = GetProps<typeof Input>;
type PasswordProps = GetProps<typeof Input.Password>;
type TextAreaProps = GetProps<typeof Input.TextArea>;

//#region Input
export interface RdInputProps extends InputProps, RdLabelFieldWrapperProps {}

export interface RdInputControlProps extends Omit<RdInputProps, 'name'>, RdRegistryControlField {}
//#endregion

//#region Input password
export interface RdInputPasswordProps extends PasswordProps, RdLabelFieldWrapperProps {}

export interface RdInputPasswordControlProps
    extends Omit<RdInputPasswordProps, 'name'>,
        RdRegistryControlField {}

//#endregion

//#region Input Textarea
export interface RdInputTextareaProps extends TextAreaProps, RdLabelFieldWrapperProps {}
export interface RdTextareaControlProps
    extends Omit<RdInputTextareaProps, 'name'>,
        RdRegistryControlField {}
//#endregion

export type InputCompoundedComponent = typeof InputInternal & {
    Password: typeof InputPassword;
    TextArea: typeof InputTextArea;
};

export type InputControlCompoundedComponent = typeof InputControlInternal & {
    Password: typeof InputPasswordControl;
    TextArea: typeof InputTextareaControl;
};

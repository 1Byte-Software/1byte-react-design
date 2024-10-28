import { TextAreaProps } from 'antd/es/input';
import { IRegistryControlField } from '../../models';
import { ILabelFieldWrapperProps } from '../LabelField/types';
export interface ITextareaProps extends TextAreaProps, ILabelFieldWrapperProps {
}
export interface ITextareaControlProps extends Omit<ITextareaProps, 'name'>, IRegistryControlField {
}

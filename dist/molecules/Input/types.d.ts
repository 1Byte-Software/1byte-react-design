import { InputProps } from 'antd';
import { IRegistryControlField } from '../../models';
import { ILabelFieldWrapperProps } from '../LabelField/types';
export interface IInputProps extends InputProps, ILabelFieldWrapperProps {
}
export interface IInputControlProps extends Omit<IInputProps, 'name'>, IRegistryControlField {
}

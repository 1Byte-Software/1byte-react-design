import { InputProps } from 'antd';
import { IRegistryControlField } from '../../models';
import { ILabelFieldWrapperProps } from '../LabelField/types';
export interface IInputPasswordProps extends InputProps, ILabelFieldWrapperProps {
}
export interface IInputPasswordControlProps extends Omit<IInputPasswordProps, 'name'>, IRegistryControlField {
}

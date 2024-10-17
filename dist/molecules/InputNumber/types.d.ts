import { InputNumberProps } from 'antd';
import { IRegistryControlField } from '../../models';
import { ILabelFieldWrapperProps } from '../LabelField/types';
export interface IInputNumberProps extends InputNumberProps, ILabelFieldWrapperProps {
}
export interface IInputNumberControlProps extends Omit<IInputNumberProps, 'name'>, IRegistryControlField {
}

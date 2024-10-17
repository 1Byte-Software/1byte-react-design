import { SelectProps } from 'antd';
import { IRegistryControlField } from '../../models';
import { ILabelFieldWrapperProps } from '../LabelField/types';
export interface ISelectProps extends SelectProps, ILabelFieldWrapperProps {
}
export interface ISelectControlProps extends Omit<ISelectProps, 'name'>, IRegistryControlField {
}

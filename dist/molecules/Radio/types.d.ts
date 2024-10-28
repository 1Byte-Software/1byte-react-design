import { RadioProps } from 'antd';
import { IRegistryControlField } from '../../models';
import { ILabelFieldWrapperProps } from '../LabelField/types';
export interface IRadioProps extends RadioProps, ILabelFieldWrapperProps {
}
export interface IRadioControlProps extends Omit<IRadioProps, 'name'>, IRegistryControlField {
}

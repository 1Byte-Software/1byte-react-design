import { SelectProps } from 'antd';
import { IRegistryControlField } from '../../models';
import { ILabelFieldWrapperProps } from '../LabelField/types';
export interface ISelectProps extends SelectProps, ILabelFieldWrapperProps {
    /**
     * Width of the select component.
     */
    width?: string | number;
    /**
     * When loading is true, the value will be hidden, default is true.
     */
    isHideValueOnLoading?: boolean;
}
export interface ISelectControlProps extends Omit<ISelectProps, 'name'>, IRegistryControlField {
}

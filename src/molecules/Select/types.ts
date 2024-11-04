import { SelectProps } from 'antd';
import { IRegistryControlField } from '../../models';
import { ILabelFieldWrapperProps } from '../LabelField/types';

/**
 * @description The variant of the select extend.
 */
export type variantSelectExtend = 'outlined-transparent';

export interface ISelectProps extends Omit<SelectProps, 'variant'>, ILabelFieldWrapperProps {
    /**
     * Width of the select component.
     */
    width?: string | number;

    /**
     * Min width of the select component.
     */
    minWidth?: string | number;

    /**
     * When loading is true, the value will be hidden, default is true.
     */
    isHideValueOnLoading?: boolean;

    /**
     * The variant of the button.
     * {@inheritdoc SelectProps#variant}
     * @see SelectProps#variant
     */
    variant?: SelectProps['variant'] | variantSelectExtend;
}

export interface ISelectControlProps extends Omit<ISelectProps, 'name'>, IRegistryControlField {}

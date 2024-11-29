import { SelectProps } from 'antd';
import { RdRegistryControlField } from '../../models';
import { RdLabelFieldWrapperProps } from '../LabelField/types';

/**
 * @description The variant of the select extend.
 */
export type variantSelectExtend = 'outlined-transparent';

type RdSelectPropsExtend = {
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
};

export type RdSelectProps = Omit<SelectProps, 'variant'> &
    RdSelectPropsExtend &
    RdLabelFieldWrapperProps;

export type RdSelectControlProps = RdSelectProps & RdRegistryControlField;

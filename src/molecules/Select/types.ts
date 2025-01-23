import { Select, GetProps } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { ComponentToken as SelectComponentTokenAntd } from 'antd/es/select/style';

//#region Define Ant Design types
type SelectProps<
    ValueType = any,
    OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
> = GetProps<typeof Select<ValueType, OptionType>>;
//#endregion

//#region Define extended component tokens
type SelectComponentTokenExtend = {};
//#endregion

//#region Define extended types

/**
 * @description The variant of the select extend.
 */
export type variantSelectExtend = 'outlined-transparent';

type SelectPropsExtend = {
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
//#endregion

//#region Export types
export type RdSelectProps<
    ValueType = any,
    OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
> = Omit<SelectProps<ValueType, OptionType>, 'variant'> & SelectPropsExtend;

export type RdSelectComponentToken = SelectComponentTokenAntd & SelectComponentTokenExtend;
//#endregion

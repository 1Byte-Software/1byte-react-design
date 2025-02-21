import { GetProps, Select } from 'antd';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { ComponentToken as SelectComponentTokenAntd } from 'antd/es/select/style';

//#region Define Ant Design types
type SelectPropsAntd<
    ValueType = any,
    OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
> = GetProps<typeof Select<ValueType, OptionType>>;

type SelectOptionPropsAntd = GetProps<typeof Select.Option>;
type SelectOptionGroupPropsAntd = GetProps<typeof Select.OptGroup>;

type BaseOptionTypeAntd = BaseOptionType;
type DefaultOptionTypeAntd = DefaultOptionType;
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
     * @deprecated Use style instead
     * Width of the select component.
     */
    width?: string | number;

    /**
     * @deprecated Use style instead
     * Min width of the select component.
     */
    minWidth?: string | number;

    /**
     * 	If `true`, the select will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;

    /**
     * When loading is true, the value will be hidden, default is true.
     */
    isHideValueOnLoading?: boolean;

    /**
     * The variant of the button.
     * {@inheritdoc SelectProps#variant}
     * @see SelectProps#variant
     */
    variant?: SelectPropsAntd['variant'] | variantSelectExtend;
};

type SelectOptionPropsExtend = {};
type SelectOptionGroupPropsExtend = {};
type BaseOptionTypeExtend = {};
type DefaultOptionTypeExtend = {};
//#endregion

//#region Export types
export type RdSelectProps<
    ValueType = any,
    OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
> = Omit<SelectPropsAntd<ValueType, OptionType>, 'variant'> & SelectPropsExtend;

export type RdSelectOptionProps = SelectOptionPropsAntd & SelectOptionPropsExtend;
export type RdSelectOptionGroupProps = SelectOptionGroupPropsAntd & SelectOptionGroupPropsExtend;

export type RdSelectComponentToken = SelectComponentTokenAntd & SelectComponentTokenExtend;

export type RdBaseOptionType = BaseOptionTypeAntd & BaseOptionTypeExtend;
export type RdDefaultOptionType = DefaultOptionTypeAntd & DefaultOptionTypeExtend;
//#endregion

//#region Define component types
// export type RdSelectComponent = React.FC<RdSelectProps>;
export type RdSelectComponent = <
    ValueType = any,
    OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
>(
    props: React.PropsWithChildren<RdSelectProps<ValueType, OptionType>>
) => React.ReactElement;

export type RdSelectOptionComponent = React.FC<RdSelectOptionProps>;
export type RdSelectOptionGroupComponent = React.FC<RdSelectOptionGroupProps>;
//#endregion

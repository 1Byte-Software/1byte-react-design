import { Select, GetProps } from 'antd';
import { ComponentToken as SelectComponentTokenAntd } from 'antd/es/select/style';

//#region Define props
type SelectProps = GetProps<typeof Select>;
//#endregion

//#region Custom component token
type SelectComponentTokenExtend = {};
//#endregion

//#region Custom props

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

//#region export type
export type RdSelectProps = Omit<SelectProps, 'variant'> & SelectPropsExtend;

export type RdSelectComponentToken = SelectComponentTokenAntd & SelectComponentTokenExtend;
//#endregion

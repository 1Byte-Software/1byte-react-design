import { Form } from 'antd';
import type { GetProps } from 'antd';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
//#region  Custom props

/**
 * @description Extension props for Form.Item in antd
 */
type FormItemExtensionProps = {
    /**
     * Error message to display
     */
    errorMessage?: string;
};

/**
 * @description Extension props for Form in antd
 */
type FormAdditionalProps = {};

//#endregion

//#region Get props from antd components
type FormPropsAntd = GetProps<typeof Form>;

type FormItemPropsAntd = GetProps<typeof Form.Item>;

// type FormItemControlProps = GetProps<typeof FormItem>;
//#endregion

//#region Props definition
export type RdFormProps = FormPropsAntd & FormAdditionalProps;

export type RdFormItemProps = FormItemPropsAntd & FormItemExtensionProps;

export type RdFormItemControlProps<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any
> = FormItemProps<TFieldValues>;
//#endregion

type AntdFormItemProps = React.ComponentProps<typeof Form.Item>;

export type FormItemProps<TFieldValues extends FieldValues = FieldValues, TContext = any> = {
    children: React.ReactNode;
    control: Control<TFieldValues, TContext>;
    name: FieldPath<TFieldValues>;
    disabled?: boolean;
    overrideFieldOnChange?: (...values: any[]) => void;
} & Omit<AntdFormItemProps, 'name' | 'rules' | 'validateStatus'>;
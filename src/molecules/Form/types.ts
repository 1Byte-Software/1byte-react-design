import type { GetProps } from 'antd';
import { Form } from 'antd';
import { ComponentToken } from 'antd/es/form/style';
import { FormRef } from 'rc-field-form/lib/interface';
import React, { ReactElement } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import { FormItemControl } from './FormItemControl';

//#region Define Ant Design types
type FormPropsAntd<Values = any> = GetProps<typeof Form<Values>>;

type FormItemPropsAntd<Values = any> = GetProps<typeof Form.Item<Values>>;

type FormListPropsAntd = GetProps<typeof Form.List>;

type FormProviderPropsAntd = GetProps<typeof Form.Provider>;

type FormErrorListPropsAntd = GetProps<typeof Form.ErrorList>;

type useFormAntd = GetProps<typeof Form.useForm>;

type useWatchAntd = GetProps<typeof Form.useWatch>;

type useFormInstanceAntd = GetProps<typeof Form.useFormInstance>;

type FormRefAntd<Values = any> = FormRef<Values>;
//#endregion

//#region Define extended component tokens
export type FormComponentToken = ComponentToken & {};
//#endregion

//#region Define extended types
type FormPropsExtend<Values = any> = {
    /**
     * Determines whether a `Form.Item` should be marked as required.
     *
     * This function receives the field name (the `name` prop of `Form.Item`)
     * and should return `true` if the field is required, or `false` otherwise.
     *
     * This allows consumers to define custom rules for determining required
     * status globally at the Form level instead of configuring each Form.Item.
     *
     * @example
     * ```tsx
     * <Form
     *   requiredResolver={(name) => ["username", "password"].includes(name)}
     * >
     *   <Form.Item name="username" label="Username">
     *     <Input />
     *   </Form.Item>
     *
     *   <Form.Item name="email" label="Email">
     *     <Input />
     *   </Form.Item>
     * </Form>
     * ```
     *
     * In the example above, only "username" and "password" will be treated
     * as required fields automatically.
     *
     * @param name - The name of the field being evaluated.
     * @returns `true` if the field should be required, otherwise `false`.
     */
    requiredResolver?: (name: string) => boolean;

    /**
     * Determines the placeholder text for a form field based on its name.
     *
     * This function receives the field name (the `name` prop of `Form.Item` or `Form.ItemControl`)
     * and should return a string to be used as the `placeholder` prop of the input component,
     * or `undefined` if no placeholder should be applied.
     *
     * This allows consumers to define custom placeholder text globally at the Form level,
     * avoiding the need to specify `placeholder` manually on each input component.
     *
     * @example
     * ```tsx
     * <Form
     *   placeholderResolver={(name) => {
     *     const placeholders: Record<string, string> = {
     *       username: "Enter your username",
     *       password: "Enter your password (at least 8 characters)",
     *       email: "example@domain.com",
     *     };
     *     return placeholders[name];
     *   }}
     * >
     *   <Form.Item name="username" label="Username">
     *     <Input />
     *   </Form.Item>
     *
     *   <Form.Item name="phone" label="Phone number">
     *     <Input />
     *   </Form.Item>
     * </Form>
     * ```
     *
     * In the example above, only fields with defined keys in the resolver will receive a placeholder.
     * Other fields will remain without placeholder unless manually specified.
     *
     * @param name - The name of the field being evaluated.
     * @returns The placeholder string if one should be applied, or `undefined` to skip.
     */
    placeholderResolver?: (name: string) => string | undefined;

    /**
     * Callback invoked **only when the user interactively changes a form value** (e.g., typing, selecting, checking a checkbox).
     *
     * This callback is **not** triggered when values are changed programmatically
     * (via `form.setValue` from react-hook-form or `form.setFieldsValue` from Ant Design).
     *
     * It works similarly to Ant Design's `onValuesChange`, but with an important difference:
     *
     * - Ant Design's `onValuesChange` may receive **old (stale) values** if you update react-hook-form inside the child component's `onChange`.
     *
     * - Our `onUserValuesChange` is called **after** the `onChange` of the child component (e.g., `<Input onChange={...} />`) has finished.
     *   This guarantees that react-hook-form has already been updated, so you always get the **latest values**.
     *
     * This is especially useful when you:
     * - Set values using `form.setValue` inside the `onChange` of your input components.
     * - Want to react to changes (e.g., API call, state update) with the most up-to-date form data.
     *
     * Key similarities with Ant Design's `onValuesChange`:
     * - Only user interaction triggers this callback (not programmatic updates).
     * - Designed to avoid infinite loops when setting values inside the callback.
     *
     * @remarks
     * Similar to Ant Design Form:
     *
     * - You shouldn't use `onChange` on each form control to collect data. Use `onUserValuesChange` of the Form instead.
     *   (You can still listen to `onChange` on individual controls if needed.)
     *
     * - You cannot set values for each form control via `value` or `defaultValue` props. Use `form.setValue` from react-hook-form instead.
     *
     * - `form.setValue` does **not** trigger `onUserValuesChange`, just like `form.setFieldsValue` does not trigger `onValuesChange` in Ant Design.
     *   This is by design to prevent infinite loops.
     *
     * @param changedValues - An object containing only the fields that changed during this user interaction.
     *                        The structure matches the form values from `react-hook-form` `getValues()`.
     *
     * @example
     * ```tsx
     * <Form
     *   onUserValuesChange={(changed) => {
     *     console.log('User changed:', changed);
     *     // Values here are always the latest from react-hook-form
     *     // Safe to use for API calls or state updates
     *   }}
     * >
     *   <Form.ItemControl name="username" control={control}>
     *     <Input
     *       onChange={(e) => {
     *         // You can safely call form.setValue here
     *         form.setValue('username', e.target.value.toUpperCase());
     *       }}
     *     />
     *   </Form.ItemControl>
     * </Form>
     * ```
     *
     * @see {@link https://ant.design/components/form#form | Ant Design Form - onValuesChange}
     */
    onUserValuesChange?: (changedValues: Values) => void;
};

type FormItemPropsExtend = {
    /**
     * Error message to display
     */
    errorMessage?: string;

    /**
     * @description Option to fit Space width to its parent width, default is false
     */
    block?: boolean;

    /**
     * If set to `true`, disables the default margin applied to the Typography.Title component.
     * @default false
     */
    disableMargin?: boolean;
};

type FormListPropsExtend = {};

type FormProviderPropsExtend = {};

type FormErrorListPropsExtend = {};
//#endregion

//#region Export types
export type RdFormProps<Values = any> = FormPropsAntd<Values> & FormPropsExtend<Values>;

export type RdFormItemProps<Values = any> = FormItemPropsAntd<Values> & FormItemPropsExtend;

export type RdFormListProps = FormListPropsAntd & FormListPropsExtend;

export type RdFormProviderProps = FormProviderPropsAntd & FormProviderPropsExtend;

export type RdFormErrorListProps = FormErrorListPropsAntd & FormErrorListPropsExtend;

export type RdFormItemControlProps<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any
> = {
    children:
        | React.ReactNode
        | ((props: RdFormItemControlProps<TFieldValues, TContext>) => React.ReactNode);
    control: Control<TFieldValues, TContext>;
    shouldUnregister?: boolean;
    name: FieldPath<TFieldValues>;
    disabled?: boolean;
    defaultValue?: any;
    overrideFieldOnChange?: (...values: any[]) => void;
} & Omit<RdFormItemProps, 'name' | 'rules' | 'validateStatus' | 'help' | 'errorMessage'>;
//#endregion

//#region Define component types
export type RdFormComponent = (<Values = any>(
    props: React.PropsWithChildren<RdFormProps<Values>> & React.RefAttributes<FormRefAntd<Values>>
) => ReactElement) &
    Pick<React.FC, 'displayName'>;

export type RdFormItemComponent = <Values = any>(props: RdFormItemProps<Values>) => ReactElement;

export type RdFormItemControlComponent = <TFieldValues extends FieldValues = FieldValues>(
    props: RdFormItemControlProps<TFieldValues>
) => ReactElement;

export type RdFormListComponent = React.FC<RdFormListProps>;

export type RdFormProviderComponent = React.FC<RdFormProviderProps>;

export type RdFormErrorListComponent = React.FC<RdFormErrorListProps>;

export type RdFormCompoundedComponent = RdFormComponent & {
    Item: RdFormItemComponent;
    ItemControl: typeof FormItemControl;
    List: RdFormListComponent;
    Provider: RdFormProviderComponent;
    ErrorList: RdFormErrorListComponent;
    useForm: useFormAntd;
    useWatch: useWatchAntd;
    useFormInstance: useFormInstanceAntd;
};
//#endregion

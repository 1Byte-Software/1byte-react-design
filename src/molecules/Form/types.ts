import type { GetProps } from 'antd';
import { Form } from 'antd';
import { ComponentToken } from 'antd/es/form/style';
import { FormRef } from 'rc-field-form/lib/interface';
import React, { ReactElement } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

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
type FormPropsExtend = {};

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
export type RdFormProps<Values = any> = FormPropsAntd<Values> & FormPropsExtend;

export type RdFormItemProps<Values = any> = FormItemPropsAntd<Values> & FormItemPropsExtend;

export type RdFormListProps = FormListPropsAntd & FormListPropsExtend;

export type RdFormProviderProps = FormProviderPropsAntd & FormProviderPropsExtend;

export type RdFormErrorListProps = FormErrorListPropsAntd & FormErrorListPropsExtend;

export type RdFormItemControlProps<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any
> = FormItemReactHookFormProps<TFieldValues> &
    Omit<FormItemPropsExtend, 'errorMessage'> & {
        shouldUnregister?: boolean;
    };

export type FormItemReactHookFormProps<
    TFieldValues extends FieldValues = FieldValues,
    TContext = any
> = {
    children: React.ReactNode;
    control: Control<TFieldValues, TContext>;
    shouldUnregister?: boolean;
    name: FieldPath<TFieldValues>;
    disabled?: boolean;
    defaultValue?: any;
    overrideFieldOnChange?: (...values: any[]) => void;
} & Omit<RdFormItemProps, 'name' | 'rules' | 'validateStatus' | 'help'>;
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
    ItemControl: RdFormItemControlComponent;
    List: RdFormListComponent;
    Provider: RdFormProviderComponent;
    ErrorList: RdFormErrorListComponent;
    useForm: useFormAntd;
    useWatch: useWatchAntd;
    useFormInstance: useFormInstanceAntd;
};
//#endregion

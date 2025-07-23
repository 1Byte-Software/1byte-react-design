import { Form as AntdForm } from 'antd';
import { Children, cloneElement, isValidElement, ReactElement, ReactNode, useEffect } from 'react';
import {
    Control,
    FieldPath,
    FieldValues,
    useController,
    ControllerRenderProps,
    ControllerFieldState,
    UseFormStateReturn,
    useFormState,
    PathValue,
} from 'react-hook-form';
import { FormItem } from './FormItem';
import { RdFormItemProps } from '../..';

// Define a type for child components that may have onChange and onBlur
type ChildWithHandlers = {
    onChange?: (...args: any[]) => void;
    onBlur?: (...args: any[]) => void;
    [key: string]: any;
};

// Define the render prop type with specific TName
type RenderProp<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = (props: {
    field: ControllerRenderProps<TFieldValues, TName>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<TFieldValues>;
}) => ReactNode;

// Update the props type to include TName for precise typing
export type RdFormItemControlProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TContext = any
> = {
    children: ReactNode | RenderProp<TFieldValues, TName>;
    control: Control<TFieldValues, TContext>;
    shouldUnregister?: boolean;
    name: TName;
    disabled?: boolean;
    defaultValue?: PathValue<TFieldValues, TName>;
    overrideFieldOnChange?: (...values: any[]) => void;
    valuePropName?: string;
} & Omit<RdFormItemProps, 'name' | 'rules' | 'validateStatus' | 'help' | 'errorMessage' | 'children'>;

export const FormItemControl = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
    children,
    control,
    name,
    disabled,
    valuePropName,
    shouldUnregister,
    defaultValue,
    overrideFieldOnChange,
    ...props
}: RdFormItemControlProps<TFieldValues, TName>) => {
    const { field, fieldState } = useController({
        name,
        control,
        disabled,
        shouldUnregister,
        defaultValue,
    });
    const formState = useFormState({ control });
    const form = AntdForm.useFormInstance();

    useEffect(() => {
        form.setFieldValue(name, field.value);
    }, [field.value, form, name]);

    // Common field props for both render prop and children
    const fieldProps = {
        ...field,
        onChange: (...params: any[]) => {
            overrideFieldOnChange
                ? overrideFieldOnChange(...params, field)
                : field.onChange(...params);
        },
        onBlur: (...params: any[]) => {
            field.onBlur();
        },
        ...(valuePropName && {
            [valuePropName]: field.value,
        }),
    };

    // Props to pass to render prop
    const renderProps: {
        field: ControllerRenderProps<TFieldValues, TName>;
        fieldState: ControllerFieldState;
        formState: UseFormStateReturn<TFieldValues>;
    } = {
        field: fieldProps as ControllerRenderProps<TFieldValues, TName>,
        fieldState,
        formState,
    };

    // Handle render prop if children is a function
    if (typeof children === 'function') {
        // Explicitly cast children to the RenderProp type to avoid type widening
        const renderFn = children as RenderProp<TFieldValues, TName>;
        return (
            <FormItem
                {...props}
                name={name}
                initialValue={field.value}
                validateStatus={fieldState.invalid ? 'error' : undefined}
                help={fieldState.error?.message}
            >
                {renderFn(renderProps)}
            </FormItem>
        );
    }

    // Handle regular children
    return (
        <FormItem
            {...props}
            name={name}
            initialValue={field.value}
            validateStatus={fieldState.invalid ? 'error' : undefined}
            help={fieldState.error?.message}
        >
            {Children.map(children, child =>
                isValidElement<ChildWithHandlers>(child)
                    ? cloneElement(child as ReactElement<ChildWithHandlers>, {
                          ...fieldProps,
                          onChange: (...params: any[]) => {
                              child.props.onChange?.(...params);
                              fieldProps.onChange(...params);
                          },
                          onBlur: (...params: any[]) => {
                              child.props.onBlur?.(...params);
                              fieldProps.onBlur();
                          },
                          ...(valuePropName && {
                              [valuePropName]: field.value,
                          }),
                      })
                    : child
            )}
        </FormItem>
    );
};

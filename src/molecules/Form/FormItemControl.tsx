import { Children, cloneElement, isValidElement, ReactElement, ReactNode, useEffect } from 'react';
import {
    Control,
    ControllerFieldState,
    ControllerRenderProps,
    FieldPath,
    FieldValues,
    PathValue,
    useController,
    useFormState,
    UseFormStateReturn,
} from 'react-hook-form';
import { Form } from './Form';
import { FormItem } from './FormItem';
import { RdFormItemProps } from './types';

// Type for child components that may have onChange/onBlur
type ChildWithHandlers = {
    onChange?: (...args: any[]) => void;
    onBlur?: (...args: any[]) => void;
    [key: string]: any;
};

// Render prop type: user receives field, fieldState, formState
type RenderProp<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = (props: {
    field: ControllerRenderProps<TFieldValues, TName>;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<TFieldValues>;
}) => ReactNode;

// Props for FormItemControl
export type RdFormItemControlProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
    TContext = any
> = {
    /** Can be a React node or a render function */
    children: ReactNode | RenderProp<TFieldValues, TName>;
    control: Control<TFieldValues, TContext>;
    shouldUnregister?: boolean;
    name: TName;
    disabled?: boolean;
    defaultValue?: PathValue<TFieldValues, TName>;
    /** Override default onChange behavior */
    overrideFieldOnChange?: (...values: any[]) => void;
    /**
     * Only used when `children` is a React element (not a function).
     * Allows mapping `field.value` to a custom prop name (e.g., `inputValue`).
     */
    valuePropName?: string;
} & Omit<
    RdFormItemProps,
    'name' | 'rules' | 'validateStatus' | 'help' | 'errorMessage' | 'children'
>;

/**
 * FormItemControl - A wrapper around react-hook-form's useController
 * with Ant Design Form.Item integration.
 *
 * Supports two modes:
 * 1. Render prop → full control, no auto-injection
 * 2. Direct children → auto-injects value, onChange, onBlur
 */
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
    // overrideFieldOnChange,
    // getValueFromEvent,
    // getValueProps,
    ...props
}: RdFormItemControlProps<TFieldValues, TName>) => {
    // Get field controller from react-hook-form
    const { field, fieldState } = useController({
        name,
        control,
        disabled,
        shouldUnregister,
        defaultValue,
    });

    // Subscribe to form state (errors, isSubmitting, etc.)
    const formState = useFormState({ control });

    const form = Form.useFormInstance();

    // Props passed to render function — user decides what to use
    const renderProps = {
        field: field as ControllerRenderProps<TFieldValues, TName>,
        fieldState,
        formState,
    };

    // If other component sets different value prop name, sync RHF state to Antd form state
    useEffect(() => {
        if (!form) return;

        if (field.value !== form.getFieldValue(name)) {
            form.setFieldValue(name, field.value);
        }
    }, [field.value, name, form]);

    if (typeof children === 'function') {
        const renderFn = children as RenderProp<TFieldValues, TName>;

        return (
            <FormItem
                {...props}
                name={name} // For Antd form state
                initialValue={field.value} // For Antd initial value
                validateStatus={fieldState.invalid ? 'error' : undefined}
                help={fieldState.error?.message}
            >
                {renderFn(renderProps)}
            </FormItem>
        );
    }

    return (
        <FormItem
            {...props}
            name={name} // For Antd form state
            initialValue={field.value} // For Antd initial value
            validateStatus={fieldState.invalid ? 'error' : undefined}
            help={fieldState.error?.message}
        >
            {Children.map(children, child =>
                isValidElement<ChildWithHandlers>(child)
                    ? cloneElement(child as ReactElement<ChildWithHandlers>, {
                          ...field,

                          //   Merge child's onChange with RHF's onChange
                          onChange: (...params: any[]) => {
                              if (props?.getValueFromEvent) {
                                  field.onChange(props.getValueFromEvent(...params));
                                  child.props.onChange?.(props.getValueFromEvent(...params));
                              } else {
                                  field.onChange(...params);
                                  child.props.onChange?.(...params);
                              }
                          },

                          // Merge child's onBlur with RHF's onBlur
                          onBlur: (...params: any[]) => {
                              child.props.onBlur?.(...params);
                              field.onBlur();
                          },
                      })
                    : child
            )}
        </FormItem>
    );
};

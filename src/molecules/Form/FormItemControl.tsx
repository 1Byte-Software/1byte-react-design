import { Children, cloneElement, isValidElement, ReactElement, ReactNode, useMemo } from 'react';
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
    overrideFieldOnChange,
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

    // Props passed to render function — user decides what to use
    const renderProps = {
        field: field as ControllerRenderProps<TFieldValues, TName>,
        fieldState,
        formState,
    };

    // ——————————————————————————————————————
    // CASE 1: children is a React element (e.g., <Input />)
    // → AUTO-INJECT value, onChange, onBlur
    // → valuePropName controls the name of the value prop
    // ——————————————————————————————————————
    const fieldProps = useMemo(() => {
        if (!valuePropName) return field;

        // Remove "value" from field but keep everything else
        const { value, ...rest } = field;
        return rest;
    }, [field, valuePropName]);

    const injectedValueProps = useMemo(() => {
        return valuePropName ? { [valuePropName]: field.value } : { value: field.value };
    }, [valuePropName, field.value]);

    // ——————————————————————————————————————
    // CASE 2: children is a render function (callback)
    // → NO auto-injection of value/onChange
    // → User must manually use `field` from props
    // ——————————————————————————————————————
    if (typeof children === 'function') {
        const renderFn = children as RenderProp<TFieldValues, TName>;

        return (
            <FormItem
                {...props}
                name={name} // For Antd form state
                initialValue={field.value} // For Antd initial value
                valuePropName="__rdInternalValue" // Dummy prop to prevent Antd auto value handling, use RHF instead
                validateStatus={fieldState.invalid ? 'error' : undefined}
                help={fieldState.error?.message}
            >
                {/* User has full control */}
                {renderFn(renderProps)}
            </FormItem>
        );
    }

    return (
        <FormItem
            {...props}
            name={name} // For Antd form state
            initialValue={field.value} // For Antd initial value
            valuePropName="__rdInternalValue" // Dummy prop to prevent Antd auto value handling, use RHF instead
            validateStatus={fieldState.invalid ? 'error' : undefined}
            help={fieldState.error?.message}
        >
            {Children.map(children, child =>
                isValidElement<ChildWithHandlers>(child)
                    ? cloneElement(child as ReactElement<ChildWithHandlers>, {
                          ...fieldProps,
                          ...injectedValueProps,

                          // Merge child's onChange with RHF's onChange
                          onChange: (...params: any[]) => {
                              const [event] = params;

                              const value = event.currentTarget?.value;

                              // Call original onChange if exists
                              if (typeof value === 'string') {
                                  child.props.onChange?.(event.currentTarget?.value);
                              } else {
                                  child.props.onChange?.(...params);
                              }

                              //   // Call override or default RHF onChange
                              //   if (overrideFieldOnChange) {
                              //       overrideFieldOnChange(...params, field);
                              //   } else {
                              //       //   field.onChange(...params);
                              //   }
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

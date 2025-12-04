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
 * FormItemControl
 * A smart wrapper that combines react-hook-form's useController with Ant Design's Form.Item.
 *
 * Supports two usage patterns:
 * 1. Render prop → full control, nothing is auto-injected
 * 2. Direct children → automatically injects value, onChange, onBlur (and optionally a custom value prop)
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
    ...props // All remaining Antd Form.Item props (label, required, tooltip, etc.)
}: RdFormItemControlProps<TFieldValues, TName>) => {
    // Get the controller from react-hook-form (value, onChange, onBlur, ref, etc.)
    const { field, fieldState } = useController({
        name,
        control,
        disabled,
        shouldUnregister,
        defaultValue,
    });

    // Subscribe to the entire form state (errors, isSubmitting, isDirty, etc.)
    const formState = useFormState({ control });

    // Get Antd Form instance from context (needed for two-way sync when Form.useForm() is used)
    const formAntdInstance = Form.useFormInstance();

    // Props passed to the render function when children is a function
    const renderProps = {
        field: field as ControllerRenderProps<TFieldValues, TName>,
        fieldState,
        formState,
    };

    /**
     * Sync react-hook-form value → Antd Form internal state
     * Antd maintains its own internal values (especially when using Form.useForm()).
     * Without this sync, external getFieldsValue/setFieldsValue calls can become out of sync.
     */
    useEffect(() => {
        if (!formAntdInstance) return;

        if (field.value !== formAntdInstance.getFieldValue(name)) {
            formAntdInstance.setFieldValue(name, field.value);
        }
    }, [field.value, name, formAntdInstance]);

    // Case 1: children is a render function → render prop pattern
    // Developer has full control; nothing is automatically injected
    if (typeof children === 'function') {
        const renderFn = children as RenderProp<TFieldValues, TName>;

        return (
            <Form.Item
                {...props}
                validateStatus={fieldState.invalid ? 'error' : undefined}
                help={fieldState.error?.message}
            >
                {renderFn(renderProps)}
            </Form.Item>
        );
    }

    // Case 2: children is a regular React element → auto-inject value/onChange/onBlur
    return (
        <FormItem
            {...props}
            name={name} // Required for Antd internal state management and validation
            initialValue={field.value} // Initial value for Antd (useful on first render)
            validateStatus={fieldState.invalid ? 'error' : undefined}
            help={fieldState.error?.message}
        >
            {Children.map(children, child =>
                isValidElement<ChildWithHandlers>(child)
                    ? cloneElement(child as ReactElement<ChildWithHandlers>, {
                          // Spread all RHF field props (value, onChange, onBlur, ref, name...)
                          ...field,

                          // Allow custom value prop name (e.g., inputValue, checked, etc.)
                          ...(valuePropName ? { [valuePropName]: field.value } : {}),

                          /**
                           * onChange HANDLER – THE MOST CRITICAL PART
                           *
                           * Ant Design Form.Item processing order:
                           * 1. getValueFromEvent (if provided) → runs first, extracts value from the event
                           *      (e.g., e.target.value, e.target.checked, file list, etc.)
                           * 2. normalize (if provided) → runs AFTER getValueFromEvent, further transforms the value
                           *
                           * Therefore, to stay 100% in sync with Antd (especially when the user passes
                           * getValueFromEvent or normalize to Form.Item), we MUST NOT manually extract
                           * the value from the event. Instead, we read the FINAL value that Antd has already
                           * processed and stored internally → formAntdInstance.getFieldValue(name)
                           *
                           * At this point, `normalizedValue` is the result of:
                           *   getValueFromEvent(...) → normalize(...) → final value Antd will store
                           *
                           * This guarantees perfect synchronization between RHF and Antd,
                           * even when those props are used.
                           */
                          onChange: (...params: any[]) => {
                              // Get the value AFTER Antd has applied getValueFromEvent + normalize
                              const normalizedValue = formAntdInstance.getFieldValue(name);

                              // Update react-hook-form state first → ensures RHF always has the latest value
                              field.onChange(normalizedValue);

                              // Then call the child's original onChange (if any)
                              // Child can now safely read the latest value from RHF or Antd if needed
                              child.props.onChange?.(normalizedValue);
                          },

                          // onBlur: call child's handler first, then mark field as touched in RHF
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

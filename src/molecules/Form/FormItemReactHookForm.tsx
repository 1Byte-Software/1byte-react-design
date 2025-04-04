import { Form as AntdForm } from 'antd';
import { Children, cloneElement, isValidElement, useEffect } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { FormItem } from './FormItem';
import { FormItemReactHookFormProps } from './types';

export const FormItemReactHookForm = <TFieldValues extends FieldValues = FieldValues>({
    children,
    control,
    name,
    disabled,
    valuePropName,
    shouldUnregister,
    defaultValue,
    overrideFieldOnChange,
    ...props
}: FormItemReactHookFormProps<TFieldValues>) => {
    const { field, fieldState } = useController({
        name,
        control,
        disabled,
        shouldUnregister,
        defaultValue,
    });
    const form = AntdForm.useFormInstance();

    useEffect(() => {
        form.setFieldValue(name, field.value);
    }, [field.value, form, name]);

    return (
        <FormItem
            {...props}
            name={name}
            initialValue={field.value}
            validateStatus={fieldState.invalid ? 'error' : undefined}
            help={fieldState.error?.message}
        >
            {Children.map(
                children,
                child =>
                    isValidElement(child) &&
                    cloneElement(child, {
                        ...field,
                        //@ts-expect-error onChange type safe is not necessary here
                        onChange: (...params) => {
                            child.props.onChange && child.props.onChange(...params);

                            overrideFieldOnChange
                                ? overrideFieldOnChange(...params, field)
                                : field.onChange(...params);
                        },
                        //@ts-expect-error onBlur type safe is not necessary here
                        onBlur: (...params) => {
                            child.props.onBlur && child.props.onBlur(...params);
                            field.onBlur();
                        },
                        ...(valuePropName && {
                            [valuePropName]: field.value,
                        }),
                    })
            )}
        </FormItem>
    );
};

import { FieldValues, useController } from 'react-hook-form';
import { FormItemProps } from './types';
import { Form as AntdForm } from 'antd';
import { Children, cloneElement, isValidElement, useEffect } from 'react';

export const FormItemReactHookForm = <TFieldValues extends FieldValues = FieldValues>({
    children,
    control,
    name,
    disabled,
    help,
    valuePropName,
    overrideFieldOnChange,
    ...props
}: FormItemProps<TFieldValues>) => {
    const { field, fieldState } = useController({ name, control, disabled });
    const form = AntdForm.useFormInstance();

    useEffect(() => {
        form.setFieldValue(name, field.value);
    }, [field.value, form, name]);

    return (
        <AntdForm.Item
            {...props}
            //@ts-expect-error Ant Design form item name type safe is not necessary here
            name={name}
            initialValue={field.value}
            validateStatus={fieldState.invalid ? 'error' : undefined}
            help={fieldState.error?.message ?? help}
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
                                ? overrideFieldOnChange(...params)
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
        </AntdForm.Item>
    );
};

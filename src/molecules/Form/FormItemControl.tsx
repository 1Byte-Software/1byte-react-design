import { FieldValues } from 'react-hook-form';
import { FormItemReactHookForm } from './FormItemReactHookForm';
import { RdFormItemControlProps } from './types';

export const FormItemControl = <TFieldValues extends FieldValues = FieldValues>(
    props: RdFormItemControlProps<TFieldValues>
) => {
    return <FormItemReactHookForm<TFieldValues> {...props} />;
};

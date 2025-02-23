import { FieldValues } from 'react-hook-form';
import { FormItemReactHookForm } from './FormItemReactHookForm';
import { RdFormItemControlProps } from './types';

export const FormItemControl = <TFieldValues extends FieldValues = FieldValues>(
    props: RdFormItemControlProps<TFieldValues>
) => {
    // if (description) {
    //     antdProps.label = (
    //         <>
    //             <div>{antdProps.label}</div>
    //             <div>{description}</div>
    //         </>
    //     );
    // }

    return <FormItemReactHookForm<TFieldValues> {...props} />;
};

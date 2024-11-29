import { FieldValues } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { FormItemReactHookForm } from './FormItemReactHookForm';
import { RdFormItemControlProps } from './types';

export const FormItemControl = <TFieldValues extends FieldValues = FieldValues>({
    description,
    ...antdProps
}: RdFormItemControlProps<TFieldValues>) => {
    // if (description) {
    //     antdProps.label = (
    //         <>
    //             <div>{antdProps.label}</div>
    //             <div>{description}</div>
    //         </>
    //     );
    // }

    return (
        <ConfigProviderDesign>
            <FormItemReactHookForm<TFieldValues> {...antdProps} />
        </ConfigProviderDesign>
    );
};

import { FieldValues } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { FormItemReactHookForm } from './FormItemReactHookForm';
import { RdFormItemControlProps } from './types';

export const FormItemControl = <TFieldValues extends FieldValues = FieldValues>({
    ...antdProps
}: RdFormItemControlProps<TFieldValues>) => {
    return (
        <ConfigProviderDesign>
            <FormItemReactHookForm<TFieldValues> {...antdProps} />
        </ConfigProviderDesign>
    );
};

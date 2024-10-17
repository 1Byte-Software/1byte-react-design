import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import { LabelField } from '../LabelField';
import { CheckboxStyle, CheckboxWrapper } from './styles';
import { ICheckboxControlProps } from './types';

export const CheckboxControl = ({
    name,
    control,

    label: labelFieldProps,

    ...antdProps
}: ICheckboxControlProps) => {
    const {
        field: { value, onChange, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    return (
        <ConfigProviderDesign>
            <CheckboxWrapper>
                <LabelField {...labelFieldProps}>
                    <CheckboxStyle {...antdProps} checked={value} onChange={onChange} ref={ref} />
                </LabelField>
                {invalid && <TextError>{error?.message}</TextError>}
            </CheckboxWrapper>
        </ConfigProviderDesign>
    );
};

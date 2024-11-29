import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { LabelField } from '../LabelField';
import { CheckboxGroupControl } from './CheckboxGroupControl';
import { CheckboxStyles } from './styles';
import { RdCheckboxControlProps } from './types';

export const CheckboxControl = ({
    name,
    control,

    label: labelFieldProps,

    ...antdProps
}: RdCheckboxControlProps) => {
    const {
        field: { value, onChange, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    return (
        <ConfigProviderDesign>
            <ConditionalWrapper
                condition={Boolean(labelFieldProps)}
                wrapper={LabelField}
                wrapperProps={labelFieldProps}
            >
                <CheckboxStyles {...antdProps} checked={value} onChange={onChange} ref={ref} />
            </ConditionalWrapper>
            {invalid && <TextError>{error?.message}</TextError>}
        </ConfigProviderDesign>
    );
};

CheckboxControl.Group = CheckboxGroupControl;

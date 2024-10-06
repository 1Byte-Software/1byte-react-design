import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import { IRegistryControlField } from '../../models';
import { LabelField } from '../LabelField';
import { ICheckboxProps } from './Checkbox';
import { CheckboxStyle, CheckboxWrapper } from './styles';

interface ICheckboxControlProps extends Omit<ICheckboxProps, 'name'>, IRegistryControlField {}

export const CheckboxControl = ({
    name,
    control,

    // ILabelField props
    required,
    label,
    labelAxis = 'vertical',
    isColon = true,
    labelDescription,
    widthField,

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
                <LabelField
                    label={label}
                    labelAxis={labelAxis}
                    required={required}
                    isColon={isColon}
                    labelDescription={labelDescription}
                    widthField={widthField}
                >
                    <CheckboxStyle {...antdProps} checked={value} onChange={onChange} ref={ref}>
                        {label}
                    </CheckboxStyle>
                </LabelField>
                {invalid && <TextError>{error?.message}</TextError>}
            </CheckboxWrapper>
        </ConfigProviderDesign>
    );
};

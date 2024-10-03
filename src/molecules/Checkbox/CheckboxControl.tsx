import { Control, useController } from 'react-hook-form';
import { CheckboxStyle, CheckboxWrapper } from './styles';
import { ILabelField, LabelField } from '../LabelField';
import { TextError } from '@/designs';
import { ICheckboxProps } from './Checkbox';
import { IControlField } from '@/models';
import { ConfigProviderDesign } from '@/ContextProvider';

interface ICheckboxControlProps extends Omit<ICheckboxProps, 'name'>, IControlField {}

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

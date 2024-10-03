import { RadioProps, Radio as AntdRadio, CheckboxOptionType } from 'antd';
import { useController } from 'react-hook-form';
import { LabelField, TextError } from '@/designs';
import { IControlField } from '@/models/interfaces/form';
import { IRadioProps } from './Radio';
import { RadioWrapper } from './styles';
import { ConfigProviderDesign } from '@/ContextProvider';

export interface IRadioControlProps extends Omit<IRadioProps, 'name'>, IControlField {}

export const RadioControl = ({
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
}: IRadioControlProps) => {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    return (
        <ConfigProviderDesign>
            <RadioWrapper>
                <LabelField
                    label={label}
                    labelAxis={labelAxis}
                    required={required}
                    isColon={isColon}
                    labelDescription={labelDescription}
                    widthField={widthField}
                >
                    <AntdRadio.Group
                        {...(antdProps as RadioProps)}
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={ref}
                    />
                </LabelField>
                {invalid && <TextError>{error?.message}</TextError>}
            </RadioWrapper>
        </ConfigProviderDesign>
    );
};

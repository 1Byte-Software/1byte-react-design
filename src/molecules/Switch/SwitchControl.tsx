import { LabelField, TextError } from '@/designs';
import { IControlField } from '@/models/interfaces/form';
import { SwitchProps, Switch as AntdSwitch } from 'antd';
import { useController } from 'react-hook-form';
import { ISwitchProps } from './Switch';
import { SwitchWrapper } from './styles';
import { ConfigProviderDesign } from '@/ContextProvider';

export interface ISwitchControlProps extends Omit<ISwitchProps, 'name'>, IControlField {}

export const SwitchControl = ({
    name,
    control,

    // ILabelField props
    required,
    label,
    labelAxis = 'vertical',
    isColon = true,
    labelDescription,
    widthField,

    responseType = 'boolean',

    ...antdProps
}: ISwitchControlProps) => {
    const {
        field: { value, onChange, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    const handleChange = (newValue: boolean) => {
        if (responseType === 'number') {
            onChange(newValue ? 1 : 0);
            return;
        }

        if (responseType === 'boolean') {
            onChange(newValue);
            return;
        }
    };

    return (
        <ConfigProviderDesign>
            <SwitchWrapper>
                <LabelField
                    label={label}
                    labelAxis={labelAxis}
                    required={required}
                    isColon={isColon}
                    labelDescription={labelDescription}
                    widthField={widthField}
                >
                    <AntdSwitch
                        {...(antdProps as SwitchProps)}
                        checked={value}
                        onChange={handleChange}
                        ref={ref}
                    />
                </LabelField>
                {invalid && <TextError>{error?.message}</TextError>}
            </SwitchWrapper>
        </ConfigProviderDesign>
    );
};

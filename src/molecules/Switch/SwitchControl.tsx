import { Switch as AntdSwitch, SwitchProps } from 'antd';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import { LabelField } from '../LabelField';
import { SwitchWrapper } from './styles';
import { ISwitchControlProps } from './types';

export const SwitchControl = ({
    name,
    control,

    responseType = 'boolean',
    label: labelFieldProps,

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
                <LabelField {...labelFieldProps}>
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

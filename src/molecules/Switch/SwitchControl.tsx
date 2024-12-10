import { Switch as AntdSwitch, SwitchProps } from 'antd';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { LabelField } from '../LabelField';
import { RdSwitchControlProps } from './types';
import { SwitchStyled } from './styles';

export const SwitchControl = ({
    name,
    control,

    responseType = 'boolean',
    label: labelFieldProps,

    ...antdProps
}: RdSwitchControlProps) => {
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
            <ConditionalWrapper
                condition={Boolean(labelFieldProps)}
                wrapper={LabelField}
                wrapperProps={labelFieldProps}
            >
                <SwitchStyled
                    {...(antdProps as SwitchProps)}
                    checked={value}
                    onChange={handleChange}
                    ref={ref}
                />
            </ConditionalWrapper>
            {invalid && <TextError>{error?.message}</TextError>}
        </ConfigProviderDesign>
    );
};

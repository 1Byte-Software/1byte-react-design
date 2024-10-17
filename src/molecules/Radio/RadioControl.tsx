import { Radio as AntdRadio, RadioProps } from 'antd';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import { LabelField } from '../LabelField';
import { RadioWrapper } from './styles';
import { IRadioControlProps } from './types';

export const RadioControl = ({
    name,
    control,

    label: labelFieldProps,

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
                <LabelField {...labelFieldProps}>
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

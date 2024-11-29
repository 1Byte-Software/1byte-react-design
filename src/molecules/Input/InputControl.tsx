import { InputProps } from 'antd';
import { useEffect } from 'react';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { LabelField } from '../LabelField';
import { InputStyled } from './styles';
import { RdInputControlProps } from './types';

export const InputControl = ({
    name,
    control,
    defaultValue,

    label: labelFieldProps,

    ...antdProps
}: RdInputControlProps) => {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
        defaultValue,
    });

    return (
        <ConfigProviderDesign>
            <ConditionalWrapper
                condition={Boolean(labelFieldProps)}
                wrapper={LabelField}
                wrapperProps={labelFieldProps}
            >
                <InputStyled
                    {...(antdProps as InputProps)}
                    value={value === undefined ? '' : value}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                />
                {invalid && <TextError>{error?.message}</TextError>}
            </ConditionalWrapper>
        </ConfigProviderDesign>
    );
};

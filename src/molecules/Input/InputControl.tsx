import { InputProps } from 'antd';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { LabelField } from '../LabelField';
import { InputStyled } from './styles';
import { IInputControlProps } from './types';

export const InputControl = ({
    name,
    control,
    defaultValue,

    label: labelFieldProps,

    ...antdProps
}: IInputControlProps) => {
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
            </ConditionalWrapper>
            {invalid && <TextError>{error?.message}</TextError>}
        </ConfigProviderDesign>
    );
};

import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { LabelField } from '../LabelField';
import { InputPasswordStyled } from './styles';
import { RdInputPasswordControlProps } from './types';

export const InputPasswordControl = ({
    name,
    control,
    defaultValue,

    label: labelFieldProps,

    ...antdProps
}: RdInputPasswordControlProps) => {
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
                <InputPasswordStyled
                    {...antdProps}
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
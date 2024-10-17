import { TextAreaProps } from 'antd/es/input';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import { LabelField } from '../LabelField';
import { TextareaStyled, TextareaWrapper } from './styles';
import { ITextareaControlProps } from './types';

export const TextareaControl = ({
    name,
    control,

    label: labelFieldProps,

    ...antdProps
}: ITextareaControlProps) => {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    return (
        <ConfigProviderDesign>
            <TextareaWrapper>
                <LabelField {...labelFieldProps}>
                    <TextareaStyled
                        {...(antdProps as TextAreaProps)}
                        value={value === undefined ? '' : value}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={ref}
                    />
                </LabelField>
                {invalid && <TextError>{error?.message}</TextError>}
            </TextareaWrapper>
        </ConfigProviderDesign>
    );
};

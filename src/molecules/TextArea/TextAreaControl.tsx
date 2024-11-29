import { TextAreaProps } from 'antd/es/input';
import { useController } from 'react-hook-form';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { LabelField } from '../LabelField';
import { TextareaStyled, TextareaWrapper } from './styles';
import { RdTextareaControlProps } from './types';

export const TextareaControl = ({
    name,
    control,

    label: labelFieldProps,

    ...antdProps
}: RdTextareaControlProps) => {
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);

        // Trigger the onChange event from antdProps
        antdProps.onChange?.(event);
    };

    return (
        <ConfigProviderDesign>
            <TextareaWrapper>
                <ConditionalWrapper
                    condition={Boolean(labelFieldProps)}
                    wrapper={LabelField}
                    wrapperProps={labelFieldProps}
                >
                    <TextareaStyled
                        {...(antdProps as TextAreaProps)}
                        value={value === undefined ? '' : value}
                        onChange={handleChange}
                        onBlur={onBlur}
                        ref={ref}
                    />
                </ConditionalWrapper>
                {invalid && <TextError>{error?.message}</TextError>}
            </TextareaWrapper>
        </ConfigProviderDesign>
    );
};

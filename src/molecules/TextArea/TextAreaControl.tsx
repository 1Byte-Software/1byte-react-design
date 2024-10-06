import { TextAreaProps } from 'antd/es/input';
import { useController } from 'react-hook-form';
import { LabelField } from '../LabelField';
import { ITextareaProps } from './TextArea';
import { TextareaStyled, TextareaWrapper } from './styles';
import { IRegistryControlField } from '../../models';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { TextError } from '../../atomics';

export interface ITextareaControlProps extends Omit<ITextareaProps, 'name'>, IRegistryControlField {}

export const TextareaControl = ({
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
                <LabelField
                    label={label}
                    labelAxis={labelAxis}
                    required={required}
                    isColon={isColon}
                    labelDescription={labelDescription}
                    widthField={widthField}
                >
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

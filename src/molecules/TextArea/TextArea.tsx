import { TextAreaProps } from 'antd/es/input';
import { ILabelField, LabelField } from '../LabelField';
import { TextareaStyled, TextareaWrapper } from './styles';
import { ConfigProviderDesign } from '@/ContextProvider';

export interface ITextareaProps extends TextAreaProps, ILabelField {}

export const TextArea = ({
    // ILabelField props
    required,
    label,
    labelAxis = 'vertical',
    isColon = true,
    labelDescription,
    widthField,

    ...antdProps
}: ITextareaProps) => {
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
                    <TextareaStyled {...(antdProps as TextAreaProps)} />
                </LabelField>
            </TextareaWrapper>
        </ConfigProviderDesign>
    );
};

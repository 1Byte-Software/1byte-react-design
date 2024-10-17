import { TextAreaProps } from 'antd/es/input';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { TextareaStyled, TextareaWrapper } from './styles';
import { ITextareaProps } from './types';

export const TextArea = ({
    label: labelFieldProps,

    ...antdProps
}: ITextareaProps) => {
    return (
        <ConfigProviderDesign>
            <TextareaWrapper>
                <LabelField {...labelFieldProps}>
                    <TextareaStyled {...(antdProps as TextAreaProps)} />
                </LabelField>
            </TextareaWrapper>
        </ConfigProviderDesign>
    );
};

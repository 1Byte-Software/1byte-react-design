import { TextAreaProps } from 'antd/es/input';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
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
                <ConditionalWrapper
                    condition={Boolean(labelFieldProps)}
                    wrapper={LabelField}
                    wrapperProps={labelFieldProps}
                >
                    <TextareaStyled {...(antdProps as TextAreaProps)} />
                </ConditionalWrapper>
            </TextareaWrapper>
        </ConfigProviderDesign>
    );
};

import { RadioButtonProps } from 'antd/es/radio/radioButton';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { RadioButtonStyles } from './styles';
import { RdRadioButtonProps } from './types';

export const RadioButton = ({
    label: labelFieldProps,

    ...antdProps
}: RdRadioButtonProps) => {
    return (
        <ConfigProviderDesign>
            <ConditionalWrapper
                condition={Boolean(labelFieldProps)}
                wrapper={LabelField}
                wrapperProps={labelFieldProps}
            >
                <RadioButtonStyles {...(antdProps as RadioButtonProps)} />
            </ConditionalWrapper>
        </ConfigProviderDesign>
    );
};

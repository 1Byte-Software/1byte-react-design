import { RadioButtonProps } from 'antd/es/radio/radioButton';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { RadioButtonStyles } from './styles';
import { IRadioButtonProps } from './types';

export const RadioButton = ({
    label: labelFieldProps,

    ...antdProps
}: IRadioButtonProps) => {
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

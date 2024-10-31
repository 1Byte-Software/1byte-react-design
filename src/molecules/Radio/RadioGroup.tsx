import { Radio as RadioAntd, RadioGroupProps } from 'antd';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { RadioGroupWrapper } from './styles';
import { IRadioGroupProps } from './types';

export const RadioGroup = ({
    label: labelFieldProps,

    ...antdProps
}: IRadioGroupProps) => {
    return (
        <ConfigProviderDesign>
            <RadioGroupWrapper>
                <ConditionalWrapper
                    condition={Boolean(labelFieldProps)}
                    wrapper={LabelField}
                    wrapperProps={labelFieldProps}
                >
                    <RadioAntd.Group {...(antdProps as RadioGroupProps)} />
                </ConditionalWrapper>
            </RadioGroupWrapper>
        </ConfigProviderDesign>
    );
};

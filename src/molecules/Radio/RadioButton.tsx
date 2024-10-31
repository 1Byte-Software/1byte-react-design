import { Radio as RadioAntd } from 'antd';
import { RadioButtonProps } from 'antd/es/radio/radioButton';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { RadioWrapper } from './styles';
import { IRadioButtonProps } from './types';

export const RadioButton = ({
    label: labelFieldProps,

    ...antdProps
}: IRadioButtonProps) => {
    return (
        <ConfigProviderDesign>
            <RadioWrapper>
                <ConditionalWrapper
                    condition={Boolean(labelFieldProps)}
                    wrapper={LabelField}
                    wrapperProps={labelFieldProps}
                >
                    <RadioAntd.Button {...(antdProps as RadioButtonProps)} />
                </ConditionalWrapper>
            </RadioWrapper>
        </ConfigProviderDesign>
    );
};

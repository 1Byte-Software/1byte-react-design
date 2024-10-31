import { Radio as RadioAntd, RadioProps } from 'antd';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { RadioWrapper } from './styles';
import { IRadioProps } from './types';
import { RadioButton } from './RadioButton';
import { RadioGroup } from './RadioGroup';

export const Radio = ({
    label: labelFieldProps,

    ...antdProps
}: IRadioProps) => {
    return (
        <ConfigProviderDesign>
            <RadioWrapper>
                <ConditionalWrapper
                    condition={Boolean(labelFieldProps)}
                    wrapper={LabelField}
                    wrapperProps={labelFieldProps}
                >
                    <RadioAntd {...(antdProps as RadioProps)} />
                </ConditionalWrapper>
            </RadioWrapper>
        </ConfigProviderDesign>
    );
};

Radio.Button = RadioButton;
Radio.Group = RadioGroup;
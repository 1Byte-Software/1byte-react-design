import { RadioProps } from 'antd';
import ConditionalWrapper from '../../atomics/ConditionalWrapper';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { RadioButton } from './RadioButton';
import { RadioGroup } from './RadioGroup';
import { RadioStyles } from './styles';
import { RdRadioProps } from './types';

export const Radio = ({
    label: labelFieldProps,

    ...antdProps
}: RdRadioProps) => {
    return (
        <ConfigProviderDesign>
            <ConditionalWrapper
                condition={Boolean(labelFieldProps)}
                wrapper={LabelField}
                wrapperProps={labelFieldProps}
            >
                <RadioStyles {...(antdProps as RadioProps)} />
            </ConditionalWrapper>
        </ConfigProviderDesign>
    );
};

Radio.Button = RadioButton;
Radio.Group = RadioGroup;

import { Radio as RadioAntd, RadioProps } from 'antd';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { LabelField } from '../LabelField';
import { RadioWrapper } from './styles';
import { IRadioProps } from './types';

export const Radio = ({
    label: labelFieldProps,

    ...antdProps
}: IRadioProps) => {
    return (
        <ConfigProviderDesign>
            <RadioWrapper>
                <LabelField {...labelFieldProps}>
                    <RadioAntd.Group {...(antdProps as RadioProps)} />
                </LabelField>
            </RadioWrapper>
        </ConfigProviderDesign>
    );
};

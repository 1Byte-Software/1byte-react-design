import { Radio as RadioAntd, RadioProps } from 'antd';
import { ILabelField, LabelField } from '../LabelField';
import { RadioWrapper } from './styles';
import { ConfigProviderDesign } from '../../ConfigProviderDesign';

export interface IRadioProps extends Omit<RadioProps, 'name'>, ILabelField {}

export const Radio = ({
    // ILabelField props
    required,
    label,
    labelAxis = 'vertical',
    isColon = true,
    labelDescription,
    widthField,

    ...antdProps
}: IRadioProps) => {
    return (
        <ConfigProviderDesign>
            <RadioWrapper>
                <LabelField
                    label={label}
                    labelAxis={labelAxis}
                    required={required}
                    isColon={isColon}
                    labelDescription={labelDescription}
                    widthField={widthField}
                >
                    <RadioAntd.Group {...(antdProps as RadioProps)} />
                </LabelField>
            </RadioWrapper>
        </ConfigProviderDesign>
    );
};

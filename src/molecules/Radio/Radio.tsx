import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { RadioButton } from './RadioButton';
import { RadioGroup } from './RadioGroup';
import { RadioStyles } from './styles';
import { RdRadioProps } from './types';

export const Radio = ({ ...antdProps }: RdRadioProps) => {
    return (
        <ConfigProviderDesign>
            <RadioStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

Radio.Button = RadioButton;
Radio.Group = RadioGroup;

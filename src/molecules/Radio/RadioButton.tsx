import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { RadioButtonStyles } from './styles';
import { RdRadioButtonProps } from './types';

export const RadioButton = ({ ...antdProps }: RdRadioButtonProps) => {
    return (
        <ConfigProviderDesign>
            <RadioButtonStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

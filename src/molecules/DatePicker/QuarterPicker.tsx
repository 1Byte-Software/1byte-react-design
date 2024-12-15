import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { QuarterPickerStyles } from './styles';
import { RdQuarterPickerProps } from './types';

export const QuarterPicker = ({ ...antdProps }: RdQuarterPickerProps) => {
    return (
        <ConfigProviderDesign>
            <QuarterPickerStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

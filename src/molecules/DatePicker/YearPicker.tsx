import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { YearPickerStyles } from './styles';
import { RdYearPickerProps } from './types';

export const YearPicker = ({ ...antdProps }: RdYearPickerProps) => {
    return (
        <ConfigProviderDesign>
            <YearPickerStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { YearPickerStyles } from './styles';
import { RdYearPickerProps } from './types';

export const YearPicker = (props: RdYearPickerProps) => {
    return (
        <ConfigProviderDesign>
            <YearPickerStyles {...props} />
        </ConfigProviderDesign>
    );
};

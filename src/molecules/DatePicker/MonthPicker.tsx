import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { MonthPickerStyles } from './styles';
import { RdMonthPickerProps } from './types';

export const MonthPicker = ({ ...antdProps }: RdMonthPickerProps) => {
    return (
        <ConfigProviderDesign>
            <MonthPickerStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

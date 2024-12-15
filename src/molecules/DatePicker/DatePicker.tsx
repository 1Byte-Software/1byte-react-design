import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { MonthPicker } from './MonthPicker';
import { QuarterPicker } from './QuarterPicker';
import { RangePicker } from './RangePicker';
import { DatePickerStyles } from './styles';
import { TimePicker } from './TimePicker';
import { RdDatePickerProps } from './types';
import { WeekPicker } from './WeekPicker';
import { YearPicker } from './YearPicker';

export const DatePicker = ({ ...antdProps }: RdDatePickerProps) => {
    return (
        <ConfigProviderDesign>
            <DatePickerStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

DatePicker.WeekPicker = WeekPicker;
DatePicker.MonthPicker = MonthPicker;
DatePicker.YearPicker = YearPicker;
DatePicker.RangePicker = RangePicker;
DatePicker.TimePicker = TimePicker;
DatePicker.QuarterPicker = QuarterPicker

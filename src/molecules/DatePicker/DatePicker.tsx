import { MonthPicker } from './MonthPicker';
import { QuarterPicker } from './QuarterPicker';
import { RangePicker } from './RangePicker';
import { DatePickerStyles } from './styles';
import { TimePicker } from './TimePicker';
import { RdDatePickerComponent, RdDatePickerCompoundedComponent } from './types';
import { WeekPicker } from './WeekPicker';
import { YearPicker } from './YearPicker';

export const DatePickerInternal: RdDatePickerComponent = props => {
    return <DatePickerStyles {...props} />;
};

export const DatePicker = DatePickerInternal as RdDatePickerCompoundedComponent;

DatePicker.WeekPicker = WeekPicker;
DatePicker.MonthPicker = MonthPicker;
DatePicker.YearPicker = YearPicker;
DatePicker.RangePicker = RangePicker;
DatePicker.TimePicker = TimePicker;
DatePicker.QuarterPicker = QuarterPicker;

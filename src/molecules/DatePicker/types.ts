import { DatePicker, GetProps } from 'antd';
import { ComponentToken as DatePickerComponentTokenAntd } from 'antd/es/date-picker/style';

//#region Define props
type DatePickerProps = GetProps<typeof DatePicker>;
type WeekPickerProps = GetProps<typeof DatePicker.WeekPicker>;
type MonthPickerProps = GetProps<typeof DatePicker.MonthPicker>;
type YearPickerProps = GetProps<typeof DatePicker.YearPicker>;
type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;
type TimePickerProps = GetProps<typeof DatePicker.TimePicker>;
type QuarterPickerProps = GetProps<typeof DatePicker.QuarterPicker>;
//#endregion

//#region Custom component token
type DatePickerComponentTokenExtend = {};
//#endregion

//#region Custom props
type DatePickerPropsExtend = {};
type WeekPickerPropsExtend = {};
type MonthPickerPropsExtend = {};
type YearPickerPropsExtend = {};
type RangePickerPropsExtend = {};
type TimePickerPropsExtend = {};
type QuarterPickerPropsExtend = {};
//#endregion

//#region export type
export type RdDatePickerProps = DatePickerProps & DatePickerPropsExtend;
export type RdWeekPickerProps = WeekPickerProps & WeekPickerPropsExtend;
export type RdMonthPickerProps = MonthPickerProps & MonthPickerPropsExtend;
export type RdYearPickerProps = YearPickerProps & YearPickerPropsExtend;
export type RdRangePickerProps = RangePickerProps & RangePickerPropsExtend;
export type RdTimePickerProps = TimePickerProps & TimePickerPropsExtend;
export type RdQuarterPickerProps = QuarterPickerProps & QuarterPickerPropsExtend;

export type RdDatePickerComponentToken = DatePickerComponentTokenAntd &
    DatePickerComponentTokenExtend;
//#endregion

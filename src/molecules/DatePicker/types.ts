import { DatePicker, GetProps } from 'antd';
import { ComponentToken as DatePickerComponentTokenAntd } from 'antd/es/date-picker/style';

//#region Define Ant Design types
type DatePickerPropsAntd = GetProps<typeof DatePicker>;
type WeekPickerPropsAntd = GetProps<typeof DatePicker.WeekPicker>;
type MonthPickerPropsAntd = GetProps<typeof DatePicker.MonthPicker>;
type YearPickerPropsAntd = GetProps<typeof DatePicker.YearPicker>;
type RangePickerPropsAntd = GetProps<typeof DatePicker.RangePicker>;
type TimePickerPropsAntd = GetProps<typeof DatePicker.TimePicker>;
type QuarterPickerPropsAntd = GetProps<typeof DatePicker.QuarterPicker>;
//#endregion

//#region Define extended component tokens
type DatePickerComponentTokenExtend = {};
//#endregion

//#region Define extended types
type DatePickerPropsExtend = {};
type WeekPickerPropsExtend = {};
type MonthPickerPropsExtend = {};
type YearPickerPropsExtend = {};
type RangePickerPropsExtend = {};
type TimePickerPropsExtend = {};
type QuarterPickerPropsExtend = {};
//#endregion

//#region Export types
export type RdDatePickerProps = DatePickerPropsAntd & DatePickerPropsExtend;
export type RdWeekPickerProps = WeekPickerPropsAntd & WeekPickerPropsExtend;
export type RdMonthPickerProps = MonthPickerPropsAntd & MonthPickerPropsExtend;
export type RdYearPickerProps = YearPickerPropsAntd & YearPickerPropsExtend;
export type RdRangePickerProps = RangePickerPropsAntd & RangePickerPropsExtend;
export type RdTimePickerProps = TimePickerPropsAntd & TimePickerPropsExtend;
export type RdQuarterPickerProps = QuarterPickerPropsAntd & QuarterPickerPropsExtend;

export type RdDatePickerComponentToken = DatePickerComponentTokenAntd &
    DatePickerComponentTokenExtend;
//#endregion

//#region Define component types
export type RdDatePickerComponent = React.FC<RdDatePickerProps>;
export type RdWeekPickerComponent = React.FC<RdWeekPickerProps>;
export type RdMonthPickerComponent = React.FC<RdMonthPickerProps>;
export type RdYearPickerComponent = React.FC<RdYearPickerProps>;
export type RdRangePickerComponent = React.FC<RdRangePickerProps>;
export type RdTimePickerComponent = React.FC<RdTimePickerProps>;
export type RdQuarterPickerComponent = React.FC<RdQuarterPickerProps>;

export type RdDatePickerCompoundedComponent = RdDatePickerComponent & {
    WeekPicker: RdWeekPickerComponent;
    MonthPicker: RdMonthPickerComponent;
    YearPicker: RdYearPickerComponent;
    RangePicker: RdRangePickerComponent;
    TimePicker: RdTimePickerComponent;
    QuarterPicker: RdQuarterPickerComponent;
};
//#endregion

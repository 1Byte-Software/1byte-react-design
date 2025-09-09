import styled, { StyledComponent } from '@emotion/styled';
import { DatePicker } from 'antd';
import {
    RdDatePickerProps,
    RdMonthPickerProps,
    RdQuarterPickerProps,
    RdRangePickerProps,
    RdTimePickerProps,
    RdWeekPickerProps,
    RdYearPickerProps,
} from './types';

export const DatePickerStyles: StyledComponent<RdDatePickerProps> = styled(DatePicker)``;

export const WeekPickerStyles: StyledComponent<RdWeekPickerProps> = styled(DatePicker.WeekPicker)``;
export const MonthPickerStyles: StyledComponent<RdMonthPickerProps> = styled(
    DatePicker.MonthPicker
)``;
export const YearPickerStyles: StyledComponent<RdYearPickerProps> = styled(DatePicker.YearPicker)``;
export const RangePickerStyles: StyledComponent<RdRangePickerProps> = styled(
    DatePicker.RangePicker
)``;
export const TimePickerStyles: StyledComponent<RdTimePickerProps> = styled(DatePicker.TimePicker)``;
export const QuarterPickerStyles: StyledComponent<RdQuarterPickerProps> = styled(
    DatePicker.QuarterPicker
)``;

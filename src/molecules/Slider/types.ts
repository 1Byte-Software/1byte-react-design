import { SliderSingleProps } from 'antd';
import { SliderRangeProps } from 'antd/es/slider';

export interface ISliderSingleProps extends SliderSingleProps {}
export interface ISliderRangeProps extends SliderRangeProps {}

export type SliderProps = ISliderSingleProps | ISliderRangeProps;

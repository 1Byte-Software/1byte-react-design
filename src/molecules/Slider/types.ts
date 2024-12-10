import { SliderSingleProps } from 'antd';
import { SliderRangeProps } from 'antd/es/slider';
import { ComponentToken } from 'antd/es/slider/style';

/**
 * @description Override SliderComponentToken of antd.
 */
export type SliderComponentToken = ComponentToken & {};

export interface ISliderSingleProps extends SliderSingleProps {}
export interface ISliderRangeProps extends SliderRangeProps {}

export type RdSliderProps = ISliderSingleProps | ISliderRangeProps;

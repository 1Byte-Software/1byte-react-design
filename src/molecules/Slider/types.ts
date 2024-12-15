import { Slider, GetProps } from 'antd';
import { ComponentToken as SliderComponentTokenAntd } from 'antd/es/slider/style';

//#region Define props
type SliderProps = GetProps<typeof Slider>;
//#endregion

//#region Custom component token
type SliderComponentTokenExtend = {};
//#endregion

//#region Custom props
type SliderPropsExtend = {};
//#endregion

//#region export type
export type RdSliderProps = SliderProps & SliderPropsExtend;
export type RdSliderComponentToken = SliderComponentTokenAntd & SliderComponentTokenExtend;
//#endregion

import { Slider, GetProps } from 'antd';
import { ComponentToken as SliderComponentTokenAntd } from 'antd/es/slider/style';

//#region Define Ant Design types
type SliderProps = GetProps<typeof Slider>;
//#endregion

//#region Define extended component tokens
type SliderComponentTokenExtend = {};
//#endregion

//#region Define extended types
type SliderPropsExtend = {};
//#endregion

//#region Export types
export type RdSliderProps = SliderProps & SliderPropsExtend;
export type RdSliderComponentToken = SliderComponentTokenAntd & SliderComponentTokenExtend;
//#endregion

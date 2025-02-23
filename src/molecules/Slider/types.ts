import { Slider, GetProps } from 'antd';
import { ComponentToken as SliderComponentTokenAntd } from 'antd/es/slider/style';

//#region Define Ant Design types
type SliderPropsAntd = GetProps<typeof Slider>;
//#endregion

//#region Define extended component tokens
type SliderComponentTokenExtend = {};
//#endregion

//#region Define extended types
type SliderPropsExtend = {};
//#endregion

//#region Export types
export type RdSliderProps = SliderPropsAntd & SliderPropsExtend;
export type RdSliderComponentToken = SliderComponentTokenAntd & SliderComponentTokenExtend;
//#endregion

//#region Define component types
export type RdSliderComponent = React.ForwardRefExoticComponent<SliderPropsAntd>;
//#endregion

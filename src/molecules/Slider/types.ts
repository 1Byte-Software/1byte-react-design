import { GetProps, Slider, SliderSingleProps } from 'antd';
import { SliderRangeProps } from 'antd/es/slider';
import { ComponentToken as SliderComponentTokenAntd } from 'antd/es/slider/style';
import type { SliderRef } from 'rc-slider/lib/Slider';

//#region Define Ant Design types
type SliderPropsAntd = GetProps<typeof Slider>;
type SliderSinglePropsAntd = SliderSingleProps;
type SliderRangePropsAntd = SliderRangeProps;
type SliderRefAntd = SliderRef;
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
export type RdSliderComponent = React.ForwardRefExoticComponent<
    (SliderSinglePropsAntd | SliderRangePropsAntd) & React.RefAttributes<SliderRefAntd>
>;
//#endregion

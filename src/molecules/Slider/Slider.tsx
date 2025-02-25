import { forwardRef } from 'react';
import { SliderStyled } from './styles';
import { RdSliderComponent } from './types';

export const Slider: RdSliderComponent = forwardRef((props, ref) => {
    return <SliderStyled ref={ref} {...props} />;
});

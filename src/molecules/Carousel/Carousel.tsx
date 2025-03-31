import { forwardRef } from 'react';
import { CarouselStyles } from './styles';
import { RdCarouselComponent } from './types';

export const Carousel: RdCarouselComponent = forwardRef((props, ref) => {
    return <CarouselStyles ref={ref} {...props} />;
});

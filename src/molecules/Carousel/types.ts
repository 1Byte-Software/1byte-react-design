import { Carousel, GetProps } from 'antd';
import { CarouselRef } from 'antd/es/carousel';
import { ComponentToken as CarouselComponentTokenAntd } from 'antd/es/collapse/style';

//#region Define Ant Design types
type CarouselPropsAntd = GetProps<typeof Carousel>;

type CarouselRefAntd = CarouselRef;
//#endregion

//#region Define extended component tokens
type CarouselComponentTokenExtend = {};
//#endregion

//#region Define extended types
type CarouselPropsExtend = {};
type CarouselRefExtend = {};
//#endregion

//#region Export types
export type RdCarouselProps = CarouselPropsAntd & CarouselPropsExtend;
export type RdCarouselRef = CarouselRefAntd & CarouselRefExtend;

export type RdCarouselComponentToken = CarouselComponentTokenAntd & CarouselComponentTokenExtend;
//#endregion

//#region Define component types
export type RdCarouselComponent = React.ForwardRefExoticComponent<
    RdCarouselProps & React.RefAttributes<RdCarouselRef>
>;
//#endregion

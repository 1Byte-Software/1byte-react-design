import { GetProps, Image } from 'antd';
import { CompositionImage, ImageProps } from 'antd/es/image';
import { ComponentToken as ImageComponentTokenAntd } from 'antd/es/image/style';

//#region Define Ant Design types
type ImagePropsAntd = ImageProps;
type PreviewGroupPropsAntd = GetProps<typeof Image.PreviewGroup>;
//#endregion

//#region Define extended component tokens
type ImageComponentTokenExtend = {};
//#endregion

//#region Define extended types
type ImagePropsExtend = {
    // Override loading prop in antd image, use loadingType instead
    loading?: boolean;
    loadingType?: ImagePropsAntd['loading'];
};

type PreviewGroupPropsExtend = {};
//#endregion

//#region Export types
export type RdImageProps = Omit<ImagePropsAntd, 'loading'> & ImagePropsExtend;
export type RdPreviewGroupProps = PreviewGroupPropsAntd & PreviewGroupPropsExtend;
export type RdImageComponentToken = ImageComponentTokenAntd & ImageComponentTokenExtend;
//#endregion

//#region Define component types
export type RdImageInternalComponent = React.FC<RdImageProps>;
export type RdPreviewGroupComponent = React.FC<PreviewGroupPropsAntd>;
export type RdImageCompositionComponent = CompositionImage<RdImageProps>;
//#endregion

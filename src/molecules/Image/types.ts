import { Image, GetProps } from 'antd';
import { ComponentToken as ImageComponentTokenAntd } from 'antd/es/image/style';

//#region Define Ant Design types
type ImagePropsAntd = GetProps<typeof Image>;
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
//#endregion

//#region Export types
export type RdImageProps = Omit<ImagePropsAntd, 'loading'> & ImagePropsExtend;
export type RdImageComponentToken = ImageComponentTokenAntd & ImageComponentTokenExtend;
//#endregion

//#region Define component types
export type RdImageComponent = React.FC<RdImageProps>;
//#endregion

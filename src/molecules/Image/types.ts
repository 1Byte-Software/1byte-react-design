import { Image, GetProps } from 'antd';
import { ComponentToken as ImageComponentTokenAntd } from 'antd/es/image/style';

//#region Define Ant Design types
type ImagePropsAntd = GetProps<typeof Image>;
//#endregion

//#region Define extended component tokens
type ImageComponentTokenExtend = {};
//#endregion

//#region Define extended types
type ImagePropsExtend = {};
//#endregion

//#region Export types
export type RdImageProps = ImagePropsAntd & ImagePropsExtend;
export type RdImageComponentToken = ImageComponentTokenAntd & ImageComponentTokenExtend;
//#endregion

//#region Define component types
export type RdImageComponent = React.FC<RdImageProps>;
//#endregion

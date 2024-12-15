import { Tag, GetProps } from 'antd';
import { ComponentToken as TagComponentTokenAntd } from 'antd/es/tag/style';

//#region Define props
type TagProps = GetProps<typeof Tag>;
//#endregion

//#region Custom component token
type TagComponentTokenExtend = {};
//#endregion

//#region Custom props
type TagPropsExtend = {};
//#endregion

//#region export type
export type RdTagProps = TagProps & TagPropsExtend;
export type RdTagComponentToken = TagComponentTokenAntd & TagComponentTokenExtend;
//#endregion

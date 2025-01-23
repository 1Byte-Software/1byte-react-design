import { Tag, GetProps } from 'antd';
import { ComponentToken as TagComponentTokenAntd } from 'antd/es/tag/style';

//#region Define Ant Design types
type TagProps = GetProps<typeof Tag>;
//#endregion

//#region Define extended component tokens
type TagComponentTokenExtend = {};
//#endregion

//#region Define extended types
type TagPropsExtend = {};
//#endregion

//#region Export types
export type RdTagProps = TagProps & TagPropsExtend;
export type RdTagComponentToken = TagComponentTokenAntd & TagComponentTokenExtend;
//#endregion

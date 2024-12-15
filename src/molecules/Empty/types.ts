import { Empty, GetProps } from 'antd';
import { ComponentToken as EmptyComponentTokenAntd } from 'antd/es/empty/style';

//#region Define props
type EmptyProps = GetProps<typeof Empty>;
//#endregion

//#region Custom component token
type EmptyComponentTokenExtend = {};
//#endregion

//#region Custom props
type EmptyPropsExtend = {};
//#endregion

//#region export type
export type RdEmptyProps = EmptyProps & EmptyPropsExtend;
export type RdEmptyComponentToken = EmptyComponentTokenAntd & EmptyComponentTokenExtend;
//#endregion

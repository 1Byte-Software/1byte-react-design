import { List, GetProps } from 'antd';
import { ComponentToken as ListComponentTokenAntd } from 'antd/es/list/style';

//#region Define props
type ListProps = GetProps<typeof List>;
type ListItemProps = GetProps<typeof List.Item>;
type ListItemMetaProps = GetProps<typeof List.Item.Meta>;
//#endregion

//#region Custom component token
type ListComponentTokenExtend = {};
//#endregion

//#region Custom props
type ListPropsExtend = {};
type ListItemPropsExtend = {};
type ListItemMetaPropsExtend = {};
//#endregion

//#region export type
export type RdListProps = ListProps & ListPropsExtend;
export type RdListItemProps = ListItemProps & ListItemPropsExtend;
export type RdListItemMetaProps = ListItemMetaProps & ListItemMetaPropsExtend;

export type RdListComponentToken = ListComponentTokenAntd & ListComponentTokenExtend;
//#endregion

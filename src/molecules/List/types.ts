import { List, GetProps } from 'antd';
import { ComponentToken as ListComponentTokenAntd } from 'antd/es/list/style';

//#region Define Ant Design types
type ListProps = GetProps<typeof List>;
type ListItemProps = GetProps<typeof List.Item>;
type ListItemMetaProps = GetProps<typeof List.Item.Meta>;
//#endregion

//#region Define extended component tokens
type ListComponentTokenExtend = {};
//#endregion

//#region Define extended types
type ListPropsExtend = {};
type ListItemPropsExtend = {};
type ListItemMetaPropsExtend = {};
//#endregion

//#region Export types
export type RdListProps = ListProps & ListPropsExtend;
export type RdListItemProps = ListItemProps & ListItemPropsExtend;
export type RdListItemMetaProps = ListItemMetaProps & ListItemMetaPropsExtend;

export type RdListComponentToken = ListComponentTokenAntd & ListComponentTokenExtend;
//#endregion

//#region Define component types
export type RdListComponent = React.FC<RdListProps & React.RefAttributes<HTMLDivElement>>;
export type RdListItemComponent = React.ForwardRefExoticComponent<
    RdListItemProps & React.RefAttributes<HTMLDivElement>
>;
export type RdListItemMetaComponent = React.FC<RdListItemProps>;

export type RdListItemCompoundedComponent = RdListItemComponent & {
    Meta: RdListItemMetaComponent;
};

export type RdListCompoundedComponent = RdListComponent & {
    Item: RdListItemCompoundedComponent;
};
//#endregion

import { GetProps, List } from 'antd';
import { ComponentToken as ListComponentTokenAntd } from 'antd/es/list/style';
import { ReactElement } from 'react';

//#region Define Ant Design types
type ListProps<T> = GetProps<typeof List<T>>;
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
export type RdListProps<T> = ListProps<T> & ListPropsExtend;
export type RdListItemProps = ListItemProps & ListItemPropsExtend;
export type RdListItemMetaProps = ListItemMetaProps & ListItemMetaPropsExtend;

export type RdListComponentToken = ListComponentTokenAntd & ListComponentTokenExtend;
//#endregion

//#region Define component types
// export type RdListComponent = React.FC<RdListProps & React.RefAttributes<HTMLDivElement>>;
export type RdListComponent = (<T>(
    props: React.PropsWithChildren<RdListProps<T>> & React.RefAttributes<HTMLDivElement>
) => ReactElement) &
    Pick<React.FC, 'displayName'>;

export type RdListItemComponent = React.ForwardRefExoticComponent<
    RdListItemProps & React.RefAttributes<HTMLDivElement>
>;
export type RdListItemMetaComponent = React.FC<RdListItemMetaProps>;

export type RdListItemCompoundedComponent = RdListItemComponent & {
    Meta: RdListItemMetaComponent;
};

export type RdListCompoundedComponent = RdListComponent & {
    Item: RdListItemCompoundedComponent;
};
//#endregion

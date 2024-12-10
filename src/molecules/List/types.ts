import { GetProps, List } from 'antd';
import { ComponentToken } from 'antd/es/list/style';
import { ListItemMeta } from './ListItemMeta';

type ListProps = GetProps<typeof List>;
type ListItemProps = GetProps<typeof List.Item>;
type ListItemMetaProps = GetProps<typeof List.Item.Meta>;

/**
 * @description Override ListComponentToken of antd.
 */
export type ListComponentToken = ComponentToken & {};

export interface RdListProps extends ListProps {}

export interface RdListItemProps extends ListItemProps {}

export interface RdListItemMetaProps extends ListItemMetaProps {}

export type ListItemCompoundedComponent = React.FC<RdListItemProps> & {
    Meta: typeof ListItemMeta;
};

export type ListCompoundedComponent = React.FC<RdListProps> & {
    Item: ListItemCompoundedComponent;
};

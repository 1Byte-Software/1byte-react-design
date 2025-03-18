import { ListItem } from './ListItem';
import { ListStyledFunc } from './styles';
import { RdListComponent, RdListCompoundedComponent, RdListProps } from './types';

export const ListInternal: RdListComponent = <T extends any>(props: RdListProps<T>) => {
    const ListStyled = ListStyledFunc<T>();

    return <ListStyled {...props} />;
};

export const List = ListInternal as RdListCompoundedComponent;
List.Item = ListItem;

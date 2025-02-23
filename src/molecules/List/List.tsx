import { ListItem } from './ListItem';
import { ListStyles } from './styles';
import { RdListComponent, RdListCompoundedComponent } from './types';

export const ListInternal: RdListComponent = props => {
    return <ListStyles {...props} />;
};

export const List = ListInternal as RdListCompoundedComponent;
List.Item = ListItem;

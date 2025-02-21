import { ListItemMetaStyles } from './styles';
import { RdListItemMetaComponent } from './types';

export const ListItemMeta: RdListItemMetaComponent = props => {
    return <ListItemMetaStyles {...props} />;
};

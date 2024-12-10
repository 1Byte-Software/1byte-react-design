import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { ListItemMeta } from './ListItemMeta';
import { ListItemStyles } from './styles';
import { ListItemCompoundedComponent, RdListItemProps } from './types';

export const ListItem: ListItemCompoundedComponent = ({ ...antdProps }: RdListItemProps) => {
    return (
        <ConfigProviderDesign>
            <ListItemStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

ListItem.Meta = ListItemMeta;

import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { ListItemMeta } from './ListItemMeta';
import { ListItemStyles } from './styles';
import { RdListItemProps } from './types';

export const ListItem = ({ ...antdProps }: RdListItemProps) => {
    return (
        <ConfigProviderDesign>
            <ListItemStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

ListItem.Meta = ListItemMeta;

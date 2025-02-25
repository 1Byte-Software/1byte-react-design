import { forwardRef } from 'react';
import { ListItemMeta } from './ListItemMeta';
import { ListItemStyles } from './styles';
import { RdListItemComponent, RdListItemCompoundedComponent } from './types';

export const ListItemInternal: RdListItemComponent = forwardRef((props, ref) => {
    return <ListItemStyles {...props} />;
});

export const ListItem = ListItemInternal as RdListItemCompoundedComponent;
ListItem.Meta = ListItemMeta;

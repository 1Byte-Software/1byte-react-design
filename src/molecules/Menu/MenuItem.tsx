import { MenuItemStyles } from './styles';
import { RdMenuItemComponent } from './types';

export const MenuItem: RdMenuItemComponent = props => {
    return <MenuItemStyles {...props} />;
};

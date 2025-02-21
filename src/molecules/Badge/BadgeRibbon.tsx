import { BadgeRibbonStyles } from './styles';
import { RdBadgeRibbonComponent } from './types';

export const BadgeRibbon: RdBadgeRibbonComponent = props => {
    return <BadgeRibbonStyles {...props} />;
};

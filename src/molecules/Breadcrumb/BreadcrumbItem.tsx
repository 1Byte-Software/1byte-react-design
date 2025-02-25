import { BreadcrumbItemStyles } from './styles';
import { RdBreadcrumbItemComponent } from './types';

export const BreadcrumbItem: RdBreadcrumbItemComponent = props => {
    return <BreadcrumbItemStyles {...props} />;
};

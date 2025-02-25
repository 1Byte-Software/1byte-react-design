import { BreadcrumbSeparatorStyles } from './styles';
import { RdBreadcrumbSeparatorComponent } from './types';

export const BreadcrumbSeparator: RdBreadcrumbSeparatorComponent = props => {
    return <BreadcrumbSeparatorStyles {...props} />;
};

import { BreadcrumbItem } from './BreadcrumbItem';
import { BreadcrumbSeparator } from './BreadcrumbSeparator';
import { BreadcrumbStyles } from './styles';
import { RdBreadcrumbComponent, RdBreadcrumbCompoundedComponent } from './types';

export const BreadcrumbInternal: RdBreadcrumbComponent = props => {
    return <BreadcrumbStyles {...props} />;
};

export const Breadcrumb = BreadcrumbInternal as RdBreadcrumbCompoundedComponent;
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Separator = BreadcrumbSeparator;

import { BreadcrumbStyles } from './styles';
import { RdBreadcrumbProps } from './types';

export const Breadcrumb = ({ ...antdProps }: RdBreadcrumbProps) => {
    return <BreadcrumbStyles {...antdProps} />;
};

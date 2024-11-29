import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { BreadcrumbStyles } from './styles';
import { RdBreadcrumbProps } from './types';

export const Breadcrumb = ({ ...antdProps }: RdBreadcrumbProps) => {
    return (
        <ConfigProviderDesign>
            <BreadcrumbStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

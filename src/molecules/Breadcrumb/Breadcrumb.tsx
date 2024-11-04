import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { BreadcrumbStyles } from './styles';
import { IBreadcrumbProps } from './types';

export const Breadcrumb = ({ ...antdProps }: IBreadcrumbProps) => {
    return (
        <ConfigProviderDesign>
            <BreadcrumbStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

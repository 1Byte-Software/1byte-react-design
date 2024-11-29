import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { ContentStyles } from './styles';
import { RdLayoutProps } from './types';

export const Content = ({ ...antdProps }: RdLayoutProps) => {
    return (
        <ConfigProviderDesign>
            <ContentStyles className='rd-content' {...antdProps} />
        </ConfigProviderDesign>
    );
};

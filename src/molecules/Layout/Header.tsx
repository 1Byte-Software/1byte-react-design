import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { HeaderStyles, LayoutStyles } from './styles';
import { RdLayoutProps } from './types';

export const Header = ({ ...antdProps }: RdLayoutProps) => {
    return (
        <ConfigProviderDesign>
            <HeaderStyles className='rd-header' {...antdProps} />
        </ConfigProviderDesign>
    );
};

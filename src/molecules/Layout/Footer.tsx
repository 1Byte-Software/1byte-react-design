import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { FooterStyles } from './styles';
import { RdLayoutProps } from './types';

export const Footer = ({ ...antdProps }: RdLayoutProps) => {
    return (
        <ConfigProviderDesign>
            <FooterStyles className='rd-footer' {...antdProps} />
        </ConfigProviderDesign>
    );
};

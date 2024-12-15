import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { FooterStyles } from './styles';
import { RdFooterProps } from './types';

export const Footer = ({ ...antdProps }: RdFooterProps) => {
    return (
        <ConfigProviderDesign>
            <FooterStyles className='rd-footer' {...antdProps} />
        </ConfigProviderDesign>
    );
};

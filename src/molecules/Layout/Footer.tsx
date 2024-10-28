import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { FooterStyles } from './styles';
import { ILayoutProps } from './types';

export const Footer = ({ ...antdProps }: ILayoutProps) => {
    return (
        <ConfigProviderDesign>
            <FooterStyles className='rd-footer' {...antdProps} />
        </ConfigProviderDesign>
    );
};

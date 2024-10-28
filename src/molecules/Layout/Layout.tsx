import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';
import { Sider } from './Sider';
import { LayoutStyles } from './styles';
import { ILayoutProps } from './types';

export const Layout = ({ ...antdProps }: ILayoutProps) => {
    return (
        <ConfigProviderDesign>
            <LayoutStyles className='rd-layout' {...antdProps} />
        </ConfigProviderDesign>
    );
};

Layout.Header = Header;
Layout.Content = Content;
Layout.Sider = Sider;
Layout.Footer = Footer;

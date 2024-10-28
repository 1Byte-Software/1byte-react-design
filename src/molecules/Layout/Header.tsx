import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { HeaderStyles, LayoutStyles } from './styles';
import { ILayoutProps } from './types';

export const Header = ({ ...antdProps }: ILayoutProps) => {
    return (
        <ConfigProviderDesign>
            <HeaderStyles className='rd-header' {...antdProps} />
        </ConfigProviderDesign>
    );
};

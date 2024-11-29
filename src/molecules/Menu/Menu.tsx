import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { MenuStyles } from './styles';
import { RdMenuProps } from './types';

export const Menu = ({ ...antdProps }: RdMenuProps) => {
    return (
        <ConfigProviderDesign>
            <MenuStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

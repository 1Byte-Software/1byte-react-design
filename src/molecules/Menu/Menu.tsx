import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { MenuStyles } from './styles';
import { IMenuProps } from './types';

export const Menu = ({ ...antdProps }: IMenuProps) => {
    return (
        <ConfigProviderDesign>
            <MenuStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

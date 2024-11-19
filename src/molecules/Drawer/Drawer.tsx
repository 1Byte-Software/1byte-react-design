import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { DrawerStyles } from './styles';
import { RdDrawerProps } from './types';

export const Drawer = ({ ...antdProps }: RdDrawerProps) => {
    return (
        <ConfigProviderDesign>
            <DrawerStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

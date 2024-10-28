import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { DrawerStyles } from './styles';
import { IDrawerProps } from './types';

export const Drawer = ({ ...antdProps }: IDrawerProps) => {
    return (
        <ConfigProviderDesign>
            <DrawerStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

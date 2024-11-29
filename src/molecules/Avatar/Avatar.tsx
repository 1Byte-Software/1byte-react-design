import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { AvatarStyles } from './styles';
import { RdAvatarProps } from './types';

export const Avatar = (props: RdAvatarProps) => {
    return (
        <ConfigProviderDesign>
            <AvatarStyles {...props} />
        </ConfigProviderDesign>
    );
};

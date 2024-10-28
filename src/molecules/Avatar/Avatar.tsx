import { ConfigProviderDesign } from '../../ConfigProviderDesign';
import { AvatarStyles } from './styles';
import { IAvatarProps } from './types';

export const Avatar = ({ ...antdProps }: IAvatarProps) => {
    return (
        <ConfigProviderDesign>
            <AvatarStyles {...antdProps} />
        </ConfigProviderDesign>
    );
};

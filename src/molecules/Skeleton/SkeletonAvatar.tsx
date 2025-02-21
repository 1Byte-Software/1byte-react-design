import { SkeletonAvatarStyled } from './styles';
import { RdSkeletonAvatarComponent } from './types';

export const SkeletonAvatar: RdSkeletonAvatarComponent = props => {
    return <SkeletonAvatarStyled {...props} />;
};

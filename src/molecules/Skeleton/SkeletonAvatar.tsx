import clsx from 'clsx';
import { SkeletonAvatarStyled } from './styles';
import { RdSkeletonAvatarComponent } from './types';

export const SkeletonAvatar: RdSkeletonAvatarComponent = ({ rootClassName, ...props }) => {
    return <SkeletonAvatarStyled rootClassName={clsx('rd-skeleton', rootClassName)} {...props} />;
};

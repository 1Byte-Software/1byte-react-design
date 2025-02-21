import { SkeletonAvatar } from './SkeletonAvatar';
import { SkeletonButton } from './SkeletonButton';
import { SkeletonImage } from './SkeletonImage';
import { SkeletonInput } from './SkeletonInput';
import { SkeletonNode } from './SkeletonNode';
import { SkeletonStyled } from './styles';
import { RdSkeletonComponent, RdSkeletonCompoundedComponent } from './types';

export const SkeletonInternal: RdSkeletonComponent = props => {
    return <SkeletonStyled {...props} />;
};

export const Skeleton = SkeletonInternal as RdSkeletonCompoundedComponent;

Skeleton.Button = SkeletonButton;
Skeleton.Avatar = SkeletonAvatar;
Skeleton.Image = SkeletonImage;
Skeleton.Input = SkeletonInput;
Skeleton.Node = SkeletonNode;

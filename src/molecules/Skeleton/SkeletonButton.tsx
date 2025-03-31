import clsx from 'clsx';
import { SkeletonButtonStyled } from './styles';
import { RdSkeletonButtonComponent } from './types';

export const SkeletonButton: RdSkeletonButtonComponent = ({ rootClassName, ...props }) => {
    return <SkeletonButtonStyled rootClassName={clsx('rd-skeleton', rootClassName)} {...props} />;
};

import clsx from 'clsx';
import { SkeletonImageStyled } from './styles';
import { RdSkeletonImageComponent } from './types';

export const SkeletonImage: RdSkeletonImageComponent = ({ rootClassName, ...props }) => {
    return <SkeletonImageStyled rootClassName={clsx('rd-skeleton', rootClassName)} {...props} />;
};

import clsx from 'clsx';
import { SkeletonNodeStyled } from './styles';
import { RdSkeletonNodeComponent } from './types';

export const SkeletonNode: RdSkeletonNodeComponent = ({ rootClassName, ...props }) => {
    return <SkeletonNodeStyled rootClassName={clsx('rd-skeleton', rootClassName)} {...props} />;
};

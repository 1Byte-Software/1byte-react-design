import clsx from 'clsx';
import { SkeletonInputStyled } from './styles';
import { RdSkeletonInputComponent } from './types';

export const SkeletonInput: RdSkeletonInputComponent = ({ rootClassName, ...props }) => {
    return <SkeletonInputStyled rootClassName={clsx('rd-skeleton', rootClassName)} {...props} />;
};

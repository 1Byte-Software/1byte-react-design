import { SkeletonButtonStyled } from './styles';
import { RdSkeletonButtonComponent } from './types';

export const SkeletonButton: RdSkeletonButtonComponent = props => {
    return <SkeletonButtonStyled {...props} />;
};

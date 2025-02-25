import { SkeletonInputStyled } from './styles';
import { RdSkeletonInputComponent } from './types';

export const SkeletonInput: RdSkeletonInputComponent = props => {
    return <SkeletonInputStyled {...props} />;
};

import { SkeletonImageStyled } from './styles';
import { RdSkeletonImageComponent } from './types';

export const SkeletonImage: RdSkeletonImageComponent = props => {
    return <SkeletonImageStyled {...props} />;
};

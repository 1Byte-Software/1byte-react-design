import { SkeletonNodeStyled } from './styles';
import { RdSkeletonNodeComponent } from './types';

export const SkeletonNode: RdSkeletonNodeComponent = props => {
    return <SkeletonNodeStyled {...props} />;
};

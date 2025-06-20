import { MetaCardStyles } from './styles';
import { RdMetaCardComponent } from './types';

export const MetaCard: RdMetaCardComponent = props => {
    return <MetaCardStyles {...props} />;
};

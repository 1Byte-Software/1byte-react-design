import { ImageStyles } from './styles';
import { RdImageComponent } from './types';

export const Image: RdImageComponent = props => {
    return <ImageStyles {...props} />;
};

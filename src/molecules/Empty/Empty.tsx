import { EmptyStyles } from './styles';
import { RdEmptyComponent } from './types';

export const Empty: RdEmptyComponent = props => {
    return <EmptyStyles {...props} />;
};
